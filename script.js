// Assignment Code
var generateBtn = document.querySelector("#generate");


//user password choices object
var userPasswordChoice = {
  passwordLength: 0,
  selectionCount: 0,
  hasUpperCase: false,
  hasLowerCase: false,
  hasNumbers: false,
  hasSpecialCharacters: false,

  //check if user password choices are valid
  isValid: function(){
        if(this.selectionCount === 0)
        {
          return false;
        }
        else{
          return true;
        }
    },

}

//password object
var userPassword = {
  
  //key properties
  minLength: 8,
  maxLength: 128,
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  specialChars: "!@#$%^&*_-+=",

  //check if number is valid
  validNumber: function(pword){
      return Number.isNaN(pword);
  },

  //check is number is valid length
  validPasswordLength: function(pword){
        if(pword < this.minLength || pword > this.maxLength)
        {
          return false;
        }
        else 
        {
          return true;
        }
    },

  //invalid entry message
  errorInvalidNumberMessage: function(){
    alert("Please enter a number between 8 and 128");
    return;
  }
}


var userGeneratedPassword = function(){

   var characters = "";
   var genPassword = "";

   //
   userPasswordChoice.hasLowerCase ? (characters += userPassword.lowerCase) : "";
   userPasswordChoice.hasUpperCase ? (characters += userPassword.upperCase) : "";
   userPasswordChoice.hasNumbers ? (characters += userPassword.numbers) : "";
   userPasswordChoice.hasSpecialCharacters ? (characters += userPassword.specialChars) : "";

   for (let i = 0; i < userPasswordChoice.passwordLength; i++) {
        genPassword += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }

  return genPassword;
}

 //prompt user for choices
 function captureUserPasswordChoices(){

  //upperCase choice
  var confirmUpperCase = confirm("Do you want uppercase letters?");
  if(confirmUpperCase === true)
  {
    userPasswordChoice.hasUpperCase = true;
    userPasswordChoice.selectionCount++;
  }

//lowerCase choice
  var confirmLowerCase = confirm("Do you want lowercase letters?");
  if(confirmLowerCase === true)
  {
    userPasswordChoice.hasLowerCase = true;
    userPasswordChoice.selectionCount++;
  }

//number choice
  var confirmNumbers = confirm("Do you want numbers?");
  if(confirmNumbers === true)
  {
    userPasswordChoice.hasNumbers = true;
    userPasswordChoice.selectionCount++;
  }

  //special character choice
  var confirmSpecialChars = confirm("Do you want special characters?");
  if(confirmSpecialChars === true)
  {
    userPasswordChoice.hasSpecialCharacters = true;
    userPasswordChoice.selectionCount++;
  }
}

//validate user entered values
var validateUserEntry = function(userEntry){
  
  //checkk for number and length
  if(!isAValidNumber(userEntry) && !isValidLength(userEntry))
  {
    return false;
  }
  else
  {
    return true;
  }

}


//check if entry is a number
var isAValidNumber = function(userEntry){
  return userPassword.validNumber(userEntry);
}

//check if entry is a valid length
var isValidLength = function(userEntry){
  return userPassword.validPasswordLength(userEntry);
}

//create password
function generatePassword(){
  
    var userEntry = prompt("How long do you want your password to be?","Please select a number between 8 and 128");
    
    //convert user entered value to number
    userEntry = parseInt(userEntry);

    //check if value entered is numeric
    if(!validateUserEntry(userEntry))
    {
      userPassword.errorInvalidNumberMessage();
    }
    else
    {
        userPasswordChoice.passwordLength = userEntry;
        //validate userPasswordChoices
        captureUserPasswordChoices();

        if(userPasswordChoice.isValid()){
          return userGeneratedPassword();
        }
        else{
          alert("You must select atleast one password type.");
          return;
        }
    }

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


