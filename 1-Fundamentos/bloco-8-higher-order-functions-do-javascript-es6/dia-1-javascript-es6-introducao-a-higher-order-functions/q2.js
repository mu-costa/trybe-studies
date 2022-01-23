const checkBet = (bet, draw) =>  {
    draw = randomNumber();
    return bet === draw ? `Parabens voce ganhou, o valor sorteado foi ${draw}` : `Tente novamente , o valor sorteado foi ${draw}`;
}

const randomNumber = () => Math.floor((Math.random() *  5) + 1);

console.log(checkBet(5));