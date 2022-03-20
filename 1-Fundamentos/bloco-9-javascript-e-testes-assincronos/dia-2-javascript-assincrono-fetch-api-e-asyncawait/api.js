const API_URL = 'https://api.coincap.io/v2/assets';

const fetchCrypto = () =>{
    const obj = {
        method: 'GET',
        headers: {'Accept': 'applications/json'}
    };

    fetch(API_URL,obj)
      .then(response => response.json())
      .then( coins =>   
       coins.data.filter((coin, index) => index < 10 ? coin : null).map((coin) => {
           const p = document.createElement('p');
           const div = document.getElementById('crypto-coins');
           p.innerText = `${coin.name} (${coin.symbol}) : ${parseFloat(coin.priceUsd).toFixed(2)}`
           div.appendChild(p);
       })
      )
}

window.onload = () => fetchCrypto();