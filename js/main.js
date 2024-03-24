/*
Steps 1-3 READ THE PDF!
*/
(function () {
  let videoGameForm = document.querySelector('#video-game-form');
  let allGameList = document.querySelector('.all-games');
  let allGameListItems = document.querySelectorAll('.all-games li');
  let myGameList = document.querySelector('.my-favourite-games');
  let myGames = [];

  // event listener for step 1
  videoGameForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let platform = event.target.elements['platform-family'].value.toLowerCase();
    filterGames(platform);
  });

  // event listener for step 2
  /* HTML for step 2 to add to the list
  <li class="list-group-item">VIDEO GAME NAME HERE</li>
  */
  allGameList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
      let game = event.target.innerText;
      addToFavouriteGames(game);
    }
  });

  // event listener for step 3
  myGameList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
      let favGame = event.target.innerText;
      removeFromFavouriteGames(favGame);
    }
  });

function filterGames(platform) {
  allGameListItems.forEach(game => {
    if (game.innerText.toLowerCase().includes(platform)) 
    {
      game.classList.remove("hidden-item");
    }
    else
    {
      game.classList.add("hidden-item");
    }
  });
}

function addToFavouriteGames(game) {
  myGames.push(game);
  renderFavouriteList();
}
  
function renderFavouriteList() {
  myGameList.innerHTML = "";
  myGames.forEach(game => {
    myGameList.innerHTML += `<li class="list-group-item">${game}</li>`;
  });
}

function removeFromFavouriteGames(game) {
  const index = myGames.indexOf(game);
  if (index !== -1) {
    myGames.splice(index, 1);
    renderFavouriteList();
  }
}
})();