
//Assignment code here
var generatePassword = {
    lower: getLowerCase,
    upper: getUpperCase,
    number: getNumbers,
    characters: getSpecialCharacters,
    length: getPasswordLength,
  }
  
  
  var getLowerCase = window.confirm("Do you want lower cased letters in your password?"); 
  
  var getUpperCase = window.confirm("Do you want UPPER cased letters in your password?"); 
  
  var getNumbers = window.confirm("Do you want numbers in your password?"); 
    
  var getSpecialCharacters = window.confirm("Do you want special characters in your password?"); 
  
  var getPasswordLength = prompt("How long do you want your password to be, from 8-128 characters."); {
  var getPasswordLength = parseInt(getPasswordLength, 10);
    
  if (typeof(getPasswordLength) == 'number')
    {   
      if (getPasswordLength >= 8)
      {
        if (getPasswordLength <= 128)
        { 
        }    
        else 
        { 
         (window.alert("Please enter a number betwen 8-128"));
        }
      }
        else { 
         (window.alert("Please enter a number betwen 8-128"));
        }
      }
    };
  
  
  
  var getLowerCase ={
      return: String.fromCharCode(Math.floor(Math.random() * 26) + 97)};
  
  
  var getUpperCase ={
    return: String.fromCharCode(Math.floor(Math.random() * 26) + 65)};

  var getNumbers = {
    return: String.fromCharCode(Math.floor(Math.random() * 10) + 48)};
  
   var getSpecialCharacters = {
    return: String.fromCharCode(Math.floor(Math.random() * 15) + 33)};
   
  
  // // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  
  // // Write password to the #password input
  function writePassword() {
    var password = generatePassword(var getLowerCase ={
        return: String.fromCharCode(Math.floor(Math.random() * 26) + 97)};
    
    
    var getUpperCase ={
      return: String.fromCharCode(Math.floor(Math.random() * 26) + 65)};
  
    var getNumbers = {
      return: String.fromCharCode(Math.floor(Math.random() * 10) + 48)};
    
     var getSpecialCharacters = {
      return: String.fromCharCode(Math.floor(Math.random() * 15) + 33)};
     }  
  
  //   passwordText.value = password;
  
  
  
  // // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);



