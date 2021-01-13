const someFunc = function (number, word) {
  if (word.length === number) {
    alert("winner");
  }
};

userInputNumber = Number(prompt("give me a number"));
userInputString = String(prompt("and now give me a word"));

someFunc(userInputNumber, userInputString);
