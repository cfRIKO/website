big_screen = document.documentElement.clientWidth > 480

fetch('https://api.github.com/users/cfriko/repos')
  .then(res => res.json())
  .then(json => console.log(json))

if (big_screen) {
  theader = document.createElement('tr')
  theader.setAttribute('id', 'theader')
  theader.appendChild(document.createElement('th').appendChild(document.createTextNode('Repository')))
  theader.appendChild(document.createElement('th').appendChild(document.createTextNode('Language')))
  theader.appendChild(document.createElement('th').appendChild(document.createTextNode('Last Commit')))
  theader.appendChild(document.createElement('th').appendChild(document.createTextNode('Stars')))

  document.getElementById('projects').appendChild(theader)
} 
