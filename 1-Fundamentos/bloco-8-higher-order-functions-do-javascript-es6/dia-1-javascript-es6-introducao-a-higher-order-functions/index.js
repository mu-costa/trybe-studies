const wakeUp = string => 'Wake up';

const drinkCoffee = string => `Let's have coffee`;

const wentToSleep = string => 'Went to sleep!!';

const doingThings = callback => console.log(callback());

doingThings(drinkCoffee);