// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol(){
  const symbols = '~!@#$%^&*()_+{}<>,.][?|'
  return symbols[Math.floor(Math.random() * symbols.length)];
}

var confirmLength = "";
var confirmSymbols;
var confirmNumbers;
var confirmUpperCase;
var confirmLowerCase;

function generatePassword() {

  var confirmLength = (prompt("How many characters would you like your password to contain?"));

  // Loop if answer is outside the parameters 
  while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password length must be between 8-128 characters Try again");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
      } 

      // Repeat back how many charactes the user will have  
      alert(`Your password will have ${confirmLength} characters`);

    // Determine parameters of password 
    var confirmSymbols = confirm("Click OK to confirm if you would like to add symbols");
    var confirmNumbers = confirm("Click OK to confirm if you would like to add numbers");    
    var confirmLowerCase = confirm("Click OK to confirm if you would like to add lowercase letters");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to add uppercase letters");

      // Loop if answer is outside the parameters 
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSymbols === false && confirmNumbers === false) {
        alert("You must choose at least one parameter");
        var confirmSymbols = confirm("Click OK to confirm if you would like to add symbols");
        var confirmNumbers = confirm("Click OK to confirm if you would like to add numbers");    
        var confirmLowerCase = confirm("Click OK to confirm if you would like to add lowercase letters");
        var confirmUpperCase = confirm("Click OK to confirm if you would like to add uppercase letters");   
    } 

      // Assign an action to the password parameters
      var passwordCharacters = []
    
      //loop through random functions and add characters
    for(let i = 0; i < confirmLength; i ++){

      if (confirmSymbols) {
         passwordCharacters = passwordCharacters.concat(getRandomSymbol());
       }
   
       if (confirmNumbers) {
         passwordCharacters = passwordCharacters.concat(getRandomNumber());
       }
         
       if (confirmLowerCase) {
         passwordCharacters = passwordCharacters.concat(getRandomLower());
       }
   
       if (confirmUpperCase) {
         passwordCharacters = passwordCharacters.concat(getRandomUpper());
       }

    }

      console.log(passwordCharacters)

      // Empty string to be filled based on for loop selecting random characters from the array
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
