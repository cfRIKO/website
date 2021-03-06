const table = document.getElementById('projects');
fetch('https://api.github.com/users/cfRIKO/repos')
  .then(res => res.json())
  .then(repos => {
    const tbody = table.tBodies[0];
    repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    repos.forEach(repo => {
      const row = tbody.insertRow();
      const name = row.insertCell();
      const link = document.createElement('a');
      link.appendChild(document.createTextNode(repo.name));
      link.href = repo.html_url;
      name.appendChild(link);
      const description = row.insertCell();
      description.appendChild(document.createTextNode(repo.description));
      const language = row.insertCell();
      language.appendChild(document.createTextNode(repo.language));
      const stars = row.insertCell();
      stars.appendChild(document.createTextNode(repo.stargazers_count));
      const updated_at = row.insertCell();
      updated_at.appendChild(document.createTextNode(repo.updated_at));
    });
  });


