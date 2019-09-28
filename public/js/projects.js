var big_screen = document.documentElement.clientWidth > 480

repos = []

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
    
      document.getElementById('projects').appendChild(theader)  
    
      repos.forEach(repo => {
        project = document.createElement('tr')
        project.classList.add('project')
        temp = document.createElement('td')
        temp.appendChild(document.createTextNode(repo.name))
        icon = document.createElement('i')
        icon.appendChild(document.createTextNode('code'))
        icon.setAttribute('class', 'material-icons')
        link = document.createElement('a')
        link.setAttribute('href', repo.website)
        link.appendChild(icon)
        temp.appendChild(link)
        project.appendChild(temp)
        temp = document.createElement('td')
        temp.appendChild(document.createTextNode(repo.lang))
        project.appendChild(temp)
        temp = document.createElement('td')
        temp.appendChild(document.createTextNode(repo.updated))
        project.appendChild(temp)
        temp = document.createElement('td')
        temp.appendChild(document.createTextNode(repo.stars))
        project.appendChild(temp)
    
        document.getElementById('projects').appendChild(project)
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

      document.getElementById('projects').appendChild(theader)  
    
      repos.forEach(repo => {   
        project = document.createElement('tr')
        project.classList.add('project')
        temp = document.createElement('td')
        temp.appendChild(document.createTextNode(repo.name))
        project.appendChild(temp)
        temp = document.createElement('td')
        temp.appendChild(document.createTextNode(repo.stars))
        project.appendChild(temp)
    
        document.getElementById('projects').appendChild(project)
      })
    }
  })

