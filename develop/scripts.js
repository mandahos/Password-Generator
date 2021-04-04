// Assignment code here
var special = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
// Array of numeric characters to be included in password
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCased = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// Array of uppercase characters to be included in password
var upperCased = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
var generateBtn = document.querySelector("#generate");

function writePassword () {
  var password = generatePassword ();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  }

  generateBtn.addEventListener("click", writePassword);
// Write password to the #password input

//text and selector prompt
function generatePassword() {
  var getPasswordLength = prompt("Please enter a number between 8-128 for your password");
  {
    var getPasswordLength = parseInt(getPasswordLength, 10);
      
    if (typeof(getPasswordLength) == "number")
      {   
        if (getPasswordLength >= 8)
        {
          if (getPasswordLength <= 128) { 
          }    
          else { 
           (window.alert("Please enter a number betwen 8-128"));
          }
        }
          else { 
           (window.alert("Please enter a number betwen 8-128"));
          }
      }
      };

  var getNumbers = confirm("Do you want numbers in your password?");

  var getLowerCase = confirm("Do you want lowercases in your password?");

  var getUpperCase = confirm("Do you want uppercases in your password?");

  var getSpecialCharacters = confirm("Do you want special characters in your password?");

  //count begins
  // var getPasswordLength = 8;
  // var getNumbers = "";
  // var getLowerCase = "";
  // var getUpperCase = "";
  // var getSpecialCharacters = "";
var possibleChar=[];
// What characters to use. 
//   var passwordOptions = {
//     getNumbers: function () {
//       return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
//     },

//     getLowerCase: function() {
//       return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
//     },

//     getUpperCase: function() {
//       return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
//     },

//     getSpecialCharacters: function() {
//       return String.fromCharCode(Math.floor(Math.random() * 15 + 33));
//     }

// };


if (getNumbers === true) {
//   getNumbers = passwordOptions.getNumbers;
// console.log(getNumbers)
possibleChar=possibleChar.concat(numbers)
console.log(possibleChar)
}
// } else {
//   getNumbers = null
// }

if (getLowerCase === true) {
  // getLowerCase = passwordOptions.getLowerCase;
  possibleChar=possibleChar.concat(lowerCased)
} 
// else {
//   getLowerCase = null
// }

if (getUpperCase === true) {
  possibleChar=possibleChar.concat(upperCased)
 
}
//  else { 
//   getUpperCase == null
// }

if (getSpecialCharacters === true) {
  possibleChar=possibleChar.concat(special)

} 
// else {
//   getSpecialCharacters == null
// }


var randomPassword = [];
  
  
for (let i = 0; i < getPasswordLength; i++) 
  { var addedCharacter=random(possibleChar)
    // var PasswordLength = Math.floor(Math.random() * 4 );

    // randomPassword += PasswordLength;
randomPassword.push(addedCharacter)
}



return randomPassword.join("")

}

function random(array) {
  var index=Math.floor(Math.random() * array.length)

  var element=array[index]

  return element
}