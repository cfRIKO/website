projects = () => {
  var big_screen = document.documentElement.clientWidth > 700

  repos = []
  cfdev_repos = []

  projects_table = document.getElementById('projects')
  cfrikodev_projects_table = document.getElementById('projects_cfrikodev')

  fetch('https://api.github.com/users/cfriko/repos')
    .then(res => res.json())
    .then(json => {
      for (let index = 0; index < json.length; index++) {
        repo = json[index]
        repo = {
          name: repo.name,
          lang: repo.language,
          website: repo.homepage ? repo.homepage : repo.svn_url,
          updated: repo.pushed_at,
          stars: repo.stargazers_count
        }
        repos.push(repo)
      }

      while (projects_table.hasChildNodes()) {
        projects_table.removeChild(projects_table.firstChild)
      }

      if (big_screen) {
        theader = document.createElement('tr')
        theader.setAttribute('id', 'theader')
        temp = document.createElement('th')
        temp.appendChild(document.createTextNode('Repository'))
        theader.appendChild(temp)
        temp = document.createElement('th')
        temp.appendChild(document.createTextNode('Language'))
        theader.appendChild(temp)
        temp = document.createElement('th')
        temp.appendChild(document.createTextNode('Last Commit'))
        theader.appendChild(temp)
        temp = document.createElement('th')
        temp.appendChild(document.createTextNode('Stars'))
        theader.appendChild(temp)
      
        projects_table.appendChild(theader)  
      
        repos.forEach(repo => {
          project = document.createElement('tr')
          project.classList.add('project')
          temp = document.createElement('td')
          weblink = document.createElement('a')
          weblink.appendChild(document.createTextNode(repo.name))
          weblink.setAttribute('href', repo.website)
          weblink.setAttribute('target', '_blank')
          temp.appendChild(weblink)
          project.appendChild(temp)
          temp = document.createElement('td')
          temp.appendChild(document.createTextNode(repo.lang))
          project.appendChild(temp)
          temp = document.createElement('td')
          temp.appendChild(document.createTextNode(repo.updated.split('T')[0]))
          project.appendChild(temp)
          temp = document.createElement('td')
          temp.appendChild(document.createTextNode(repo.stars))
          project.appendChild(temp)
      
          projects_table.appendChild(project)
        })
      
      } else {
        theader = document.createElement('tr')
        theader.setAttribute('id', 'theader')
        temp = document.createElement('th')
        temp.appendChild(document.createTextNode('Repository'))
        theader.appendChild(temp)
        temp = document.createElement('th')
        temp.appendChild(document.createTextNode('Stars'))
        theader.appendChild(temp)

        projects_table.appendChild(theader)  
      
        repos.forEach(repo => {   
          project = document.createElement('tr')
          project.classList.add('project')
          temp = document.createElement('td')
          weblink = document.createElement('a')
          weblink.appendChild(document.createTextNode(repo.name))
          weblink.setAttribute('href', repo.website)
          weblink.setAttribute('target', '_blank')
          temp.appendChild(weblink)
          project.appendChild(temp)
          temp = document.createElement('td')
          temp.appendChild(document.createTextNode(repo.stars))
          project.appendChild(temp)
      
          projects_table.appendChild(project)
        })
      }
    })
    .catch(() => {
      temp = document.createElement('th')
      temp.appendChild(document.createTextNode('No Projects Found.'))
      temp.setAttribute('id', 'error')
      projects_table.appendChild(temp)
    })
}

projects()
window.addEventListener('resize', projects)