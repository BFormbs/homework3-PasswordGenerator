// Assignment Code
var getLength = 0;
var newPassword = [];
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");
var displayPasswordEl = document.querySelector("#password");
var isCharTypeNum = "false";
var isCharTypeUpper = "false";
var isCharTypeLower = "false";
var isCharTypeSpecial = "false";

const typeLowerCaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const typeUpperCaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const typeNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const typeSpecialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "{",
  "}",
  ":",
  '"',
  "<",
  ">",
  "?",
  '"',
];

generateBtn.addEventListener("click", function () {
  event.preventDefault();
  getUserInput();
  generateChoicesArray();
  generateNewPassword();
  choicesArray = [];
});

function getUserInput() {
  getLength = prompt("Select legth of 10-128 characters:");
  isCharTypeNum = confirm("Include numbers?");
  isCharTypeUpper = confirm("Include upper case?");
  isCharTypeLower = confirm("Include lower case?");
  isCharTypeSpecial = confirm("Include special characters");
}

var choicesArray = [];

function generateChoicesArray() {
  if (isCharTypeUpper === true)
    choicesArray = choicesArray.concat(typeUpperCaseLetters);
  if (isCharTypeLower === true)
    choicesArray = choicesArray.concat(typeLowerCaseLetters);
  if (isCharTypeNum === true) choicesArray = choicesArray.concat(typeNumbers);
  if (isCharTypeSpecial === true)
    choicesArray = choicesArray.concat(typeSpecialCharacters);
}

function generateNewPassword() {
  if (choicesArray.length < typeNumbers.length || getLength < 10) {
    alert("You did not meet the minimum standard ");
  } else {
    for (i = 0; i < getLength; i++) {
      newPassword +=
        choicesArray[Math.floor(Math.random() * (choicesArray.length - 1))];
    }
    displayPasswordEl.textContent = newPassword;
  }
  newPassword = [];
}

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  newPassword.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

var text = document.querySelector("#password");
navigator.clipboard.writeText(text).then(
  function () {
    console.log("Async: Copying to clipboard was successful!");
  },
  function (err) {
    console.error("Async: Could not copy text: ", err);
  }
);

generateBtn.addEventListener("click", writePassword);
