// Only change code above this line

function randomRangeNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  }
  // var randomNum = randomRangeNumber(0, 100)
  
  console.log(randomRangeNumber(1, 10));

// Only change code above this line

module.exports = randomRangeNumber;