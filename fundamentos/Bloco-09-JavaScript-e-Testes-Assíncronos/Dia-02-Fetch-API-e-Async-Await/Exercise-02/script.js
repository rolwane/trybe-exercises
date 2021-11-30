const main = document.querySelector('main');
const pError = document.querySelector('.p-error');

async function getCoins() {
  const dataFetch = await fetch('https://api.coincap.io/v2/assets');
  const dataJSON = await dataFetch.json();
  return dataJSON.data;
}

function createCard(coin) {
  const card = `
  <div class="card">
    <h2><span class="name">${coin.name}</span> (<span class="symbol">${coin.symbol}</span>)</h2> <br>
    <p>USD: <span class="price">${Number(coin.priceUsd).toFixed(2)}</span></p>
  </div>`;
  main.innerHTML += card;
}

getCoins().then((coins) => {
  coins.forEach((coin, i) => {
    if (i < 10) createCard(coin)
  });
}).catch((error) => pError.style.display = 'block');
