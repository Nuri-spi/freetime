


const base_url = 'https://www.freetogame.com/api'

const api = {
    games: "/games"
}


//DOM   
const divEl = document.getElementById('games')

//async
async function getFreeGames() {
    const response = await fetch(base_url + api.games);
    const data = await response.json()
    console.log(data);
    divEl.innerHTML = data.map(game => renderGame(game)).join('')
}
getFreeGames()


function renderGame(gameData) {
    return `
    <div class="card" style="width: 18rem;">
      <img src="${gameData.thumbnail}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${gameData.title}</h5>
        <p class="card-text">${gameData.short_description}</p>
        <a href="/game-info.html?id=${gameData.id}" target="_blank" 
         class="btn btn-primary">go more</a>
      </div>
    </div>`
}