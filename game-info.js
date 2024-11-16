


const h2El = document.querySelector('h2')
const h2about = document.querySelector('.about')
const urlParams = new URLSearchParams(window.location.search)
const gameId = urlParams.get('id')
const img = document.querySelector('img')
const pdesc = document.querySelector('.desc')
const gameT = document.querySelector('.gametitle')
const Gdate = document.querySelector('.Gdate')
const Gdev = document.querySelector('.Gdev')
const screen = document.querySelector('.screen')
const Ggenre = document.querySelector('.Ggenre')
const Gpubl = document.querySelector('.Gpubl')
const Gplatform = document.querySelector('.Gplatform')

h2El.innerText = 'Game Id' + gameId

const base_url = 'https://www.freetogame.com/api/game?id='

async function getGameById() {
    const response = await fetch(base_url + gameId)
    const info = await response.json()
    console.log(info);
    infoGame(info)

}
getGameById()


if (gameId) {
    getGameById()
}
const months = ['January', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', ' September', 'October', 'November', 'December']
function infoGame(gameData) {
    h2El.innerText = gameData.title
    img.src = gameData.thumbnail
    h2about.innerText = "About " + gameData.title
    pdesc.innerText = gameData.description
    gameT.innerText = gameData.title
    const d = new Date(gameData.release_date)
    Gdate.innerText = months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear()
    Gdev.innerText = gameData.developer
    screen.innerText = gameData.title + ' Screenshots'
    Ggenre.innerText = gameData.genre
    Gpubl.innerText = gameData.publisher
    Gplatform.innerText = gameData.Platform




}


