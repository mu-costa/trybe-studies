const API_URL = "https://api.coincap.io/v2/assets";
const API_URL_2 =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json";

const fetchCrypto = async () => {
  let valuetoConvert = 0;
  await fetch(API_URL_2).then((price) => price.json())
    .then((data) => valuetoConvert = data.usd.brl);

  const obj = {
    method: "GET",
    headers: { Accept: "applications/json" },
  };

  fetch(API_URL, obj)
    .then((response) => response.json())
    .then((coins) =>
      coins.data
        .filter((coin, index) => (index < 10 ? coin : null))
        .map((coin) => {
          const p = document.createElement("p");
          const div = document.getElementById("crypto-coins");
          p.innerText = `${coin.name} (${coin.symbol}) : ${parseFloat(
            coin.priceUsd * valuetoConvert
          ).toFixed(2)}`;
          div.appendChild(p);
        })
    );
};

window.onload = () => fetchCrypto();
