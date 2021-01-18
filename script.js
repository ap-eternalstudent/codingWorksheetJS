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

// let newArray = [];
// const takesArray = function (array) {
//   array.forEach((element) => {
//     if (element % 2 !== 0) {
//       newArray.push(element);
//     }
//   });
// };

// takesArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// const numsArr = [2, 7, 11, 15];
// const targetNum = 18;

// const twoSum = function (nums, target) {
//   let message = "";
//   let firstVar = nums[0];
//   let secondVar = nums[1];
//   let thirdVar = nums[2];
//   let fourthVar = nums[3];
//   let index1 = 0;
//   let index2 = 0;
//   if (firstVar + secondVar === target) {
//     index1 = nums.indexOf(firstVar);
//     index2 = nums.indexOf(secondVar);
//     message = `${index1} and ${index2}`;
//   } else if (firstVar + thirdVar === target) {
//     index1 = nums.indexOf(firstVar);
//     index2 = nums.indexOf(thirdVar);
//     message = `${index1} and ${index2}`;
//   } else if (firstVar + fourthVar === target) {
//     index1 = nums.indexOf(firstVar);
//     index2 = nums.indexOf(fourthVar);
//     message = `${index1} and ${index2}`;
//   } else if (secondVar + thirdVar === target) {
//     index1 = nums.indexOf(secondVar);
//     index2 = nums.indexOf(thirdVar);
//     message = `${index1} and ${index2}`;
//   } else if (secondVar + fourthVar === target) {
//     index1 = nums.indexOf(secondVar);
//     index2 = nums.indexOf(fourthVar);
//     message = `${index1} and ${index2}`;
//   } else if (thirdVar + fourthVar === target) {
//     index1 = nums.indexOf(thirdVar);
//     index2 = nums.indexOf(fourthVar);
//     message = `${index1} and ${index2}`;
//   } else {
//     message = "no can do";
//   }
//   return message;
// };

// twoSum(numsArr, targetNum);

// Please create a function that takes in a number. Print all the numbers from 1 to that number in the console, but skip any number that when multiplied by three is divisible by 2.

function takesNumber(num) {
  const startNumber = 1;
  for (i = startNumber; i <= num; i++) {
    if ((i * 3) % 2 === 0) {
      console.log(i);
    }
  }
}

takesNumber(99);
