const diceRoller = function(diceQuantity) {
  for (let i = 0; i < diceQuantity; i++) {
    console.log(rollDice(6));
  }
};

const rollDice = function(max) {
  return 1 + Math.floor(Math.random() * (max));
};

diceRoller(1);
console.log(myLocalVar);