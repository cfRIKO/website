const createProject = (project) => {
    var projectTitle = document.createElement('h1')
    projectTitle.classList.add('projecttitle')
    projectTitle.textContent = project.name

    var projectDescription = document.createElement('p')
    projectDescription.classList.add('projectdescription')
    projectDescription.textContent = project.description

    var projectDiv = document.createElement('div')
    projectDiv.classList.add('project')
    projectDiv.appendChild(projectTitle)
    projectDiv.appendChild(projectDescription)
    return projectDiv
}

const container = document.getElementById('projects')

fetch('http://localhost:3000/api/projects')
    .then(response => response.json())
    .then(projects => {
        projects.data.forEach(project => {
            container.appendChild(createProject(project))
        });
    })