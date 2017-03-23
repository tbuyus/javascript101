const projectsUrl = 'https://api.github.com/users/CodeHubOrg/repos'

const testApiResponse = [
  {"name": "repo1", "description": "this is the description1", "html_url": "https://github.com/octocat/repo1", "homepage": "https://myApp.com"},
  {"name": "repo2", "description": "this is the description2", "html_url": "https://github.com/octocat/repo2", "homepage": "https://myApp.com"},
  {"name": "repo3", "description": "this is the description3", "html_url": "https://github.com/octocat/repo3", "homepage": "https://myApp.com"}
  ]

const makeCard = (projName, description, appUrl, homepage) => {

  const card = `<div class="col-sm-6 col-md-4">
        <div class="thumbnail">
          <img src="http://placehold.it/100x100" alt="proj-image">
          <div class="caption">
            <h3>${projName}</h3>
            <p>${description}</p>
            <p><a href=${appUrl} class="btn btn-default" role="button">App</a> <a href=${homepage} class="btn btn-default" role="button">Repo</a></p>
          </div>
        </div>
      </div>`
  
  return card
}


const appendCard = (card, locationToAppend) => {
  locationToAppend.insertAdjacentHTML('beforeend', card) 
}

// making too many api calls.
// fetch(projectsUrl)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (json) {
//     console.log(json)
//     json.forEach(proj => console.log(proj.name))
//   });



document.addEventListener("DOMContentLoaded", function (event) {

  // cache DOM
  const appendLocation = document.querySelector('.row')

  // append projects to page
  testApiResponse.forEach( proj => appendCard( makeCard(proj.name, proj.description, proj.html_url, proj.homepage), appendLocation) )
  
})

