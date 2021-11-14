// Assignment code here
/*const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generate = document.getElementById('generate');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}; */



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function userChoices () {
  var lenght = parseInt(prompt("Choose a number between 8 and 128 to generate password"), 10);
  if ((lenght >= 8) && (lenght <=128)) {
    var characters = confirm("Would you like to add symbols?");
    if (characters === true) {
      minimumSymbols = functionArray.getRandomSymbol();
      minimumCount++;
    } 
    else {
      alert("No symbols will be added.");
    }
    var numbers = confirm("Would you like to add numbers?");
    if (numbers === true) {
      minimumNumbers = functionArray.getRandomNumber();
      minimumCount++;
    }
    else {
      alert("No numbers will be added.");
    }
    var upperCaseLetters = confirm("Would you like to add upper case letter?");
    if (upperCaseLetters === true) {
      minimumUpperCase = functionArray.getRandomUpper();
      minimumCount++;
    }
    else {
      alert ("No upper case letters will  be added.");
    }
    var lowerCaseLetters = confirm("Would you like to add lower case letters?");
    if (lowerCaseLetters === true) {
      minimumLowerCase = functionArray.getRandomLower();
      minimumCount++;
    }
    else {
      alert ("No lower case letters will be added.");
    };
    var password = "";
    for (let i = 0; i < (parseInt(length) - minimumCount); i++) {
      var randomNumberChosen = Math.floor(Math.random() * 4);
      password += functionArray[randomNumberChosen]();
    }
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  else {
    alert("Please enter a number between 8 and 128");
  }
}

var minimumCount = 0;

var minimumNumbers = "";
var minimumLowerCase = "";
var minimumUpperCase = "";
var minimumSymbols = "";

password += minimumNumbers;
password += minimumLowerCase;
password += minimumUpperCase;
password += minimumSymbols;

function generatePassword(){
  var options = userChoices();
}

var functionArray = {
 
  getRandomLower: function () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  },
  
  getRandomUpper: function () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  },
  
  getRandomNumber: function () {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  },
  
  getRandomSymbol: function () {
    const symbols = '!@#$%^&*()_-{}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

}

// Write password to the #password input
function writePassword() {
 var password = generatePassword();
 // var passwordText = document.querySelector("#password");

//  passwordText.value = password;

};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/*console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSymbol());
console.log(writePassword());*/