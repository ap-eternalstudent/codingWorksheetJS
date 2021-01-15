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

// Please create a function that takes in the name of a person. This function should add this person to a names list and let them know their position on the list. The names list should be created outside of the function.

let namesList = [];
const takesName = function (name) {
  namesList.push(name);
  message = `${name} you are number ${namesList.length} in line`;
  console.log(message);
};

takesName("Anton");
takesName("George");
takesName("Boris");

// Please create a function that takes in an array of numbers and returns a new array that only contains odd numbers.

let newArray = [];
const takesArray = function (array) {
  array.forEach((element) => {
    if (element % 2 !== 0) {
      newArray.push(element);
    }
  });
};

takesArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
