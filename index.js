
// this funtion returns a random number after coverting the string for the selected diceType into an integer that can be used to limit the Max value of the return, then display the result.

function rollDice() {
  const diceType = document.getElementById('diceType').value;
  const max = parseInt(diceType, 10); 
  const roll = Math.floor(Math.random() * max) + 1; 

  document.getElementById('result').textContent = `You Rolled: ${roll}`;
}

// Test
function testRollDice() {
  const diceTypes = [4, 6, 8, 10, 12, 20];  
  for (let i = 0; i < diceTypes.length; i++) {
    const diceType = diceTypes[i];
    const roll = rollDice(diceType); 

    
    if (roll <1 || roll > diceType) {
      throw new Error(`Test failed for D${diceType}: Rolled ${roll} is out of bounds!`);
    } else {
      console.log(`Test passed for D${diceType}: Rolled ${roll}`);
    }
  }
}

testRollDice();