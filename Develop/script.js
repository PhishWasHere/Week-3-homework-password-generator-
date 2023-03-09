// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// Global array containing characters
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";



function generatePassword() {
  var length = (prompt('Enter password length:'));
  // prompt that determins min/max length 
  while(length <= 7 || length >= 17) {
    alert("Password length must be between 8-16 characters Try again");
    var length = (prompt("How many characters would you like your password to contain?"));
  } 

  var includeLowercase = confirm('Include lowercase letters?');
  var includeUppercase = confirm('Include uppercase letters?');
  var includeNumbers = confirm('Include numbers?');
  var includeSymbols = confirm('Include symbols?');
  //i kinda know how this works, but dont know enough to make comments
  var characters = ("");
  if (includeLowercase) {
    characters += lowercase;
  }
  if (includeUppercase) {
    characters += uppercase;
  }
  if (includeNumbers) {
    characters += numbers;
  }
  if (includeSymbols) {
    characters += symbols;
  }

  var ranPassword = ("")
  //for loop that randomizes password based on prev if statements
  for (var i = 0; i < length; i++) {
    ranPassword += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  //i straight up dont know how return ranpass displays password, but it works so i dont question it
  return ranPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
