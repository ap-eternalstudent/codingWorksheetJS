const someFunc = function (number, word) {
  if (word.length === number) {
    alert("winner");
  }
};

userInputNumber = Number(prompt("give me a number"));
userInputString = String(prompt("and now give me a word"));

someFunc(userInputNumber, userInputString);
// Please create a function that takes in an array. The function should console.log() the sum of the first value in the array and the last value in the array

myArray = [1, 2, 3, 4, 5, 6, 7];

const arrayVariableSum = function (array) {
  fisrtVar = array[0];
  secondVar = array.length - 1;
  return fisrtVar + secondVar;
};

arrayVariableSum(myArray);
