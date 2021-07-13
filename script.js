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
  passwordChoice: "",

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

    generatePassword: function(){
    
      var characters = "";
      var genPassword = "";

      console.log(this.hasUpperCase);
      console.log(this.hasLowerCase);
      console.log(this.hasNumbers);
      console.log(this.hasSpecialCharacters);
   

      //append user selection to generate password
      this.hasLowerCase ? (characters += userPassword.lowerCase) : "";
      this.hasUpperCase ? (characters += userPassword.upperCase) : "";
      this.hasNumbers ? (characters += userPassword.numbers) : "";
      this.hasSpecialCharacters ? (characters += userPassword.specialChars) : "";

      //randomly generate paswword
      for (let i = 0; i < this.passwordLength; i++) {
            genPassword += characters.charAt(
              Math.floor(Math.random() * characters.length)
            );
          }

      console.log(genPassword);
      return genPassword;
    },

    initializeUserPassword: function(){
      hasUpperCase = false;
      hasLowerCase = false;
      hasNumbers = false;
      hasSpecialCharacters = false;
    }

}


//password object
var userPassword = {
  
  //key properties
  minLength: 8,
  maxLength: 128,
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  specialChars: "~()`!@#$%^&*_-+=",

  //check if number is valid
  validNumber: function(pword){
    
    if(isNaN(pword))
    {
      return false;
    }
    else{
      return true;
    }
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


 //prompt user for choices
 function captureUserPasswordChoices(){

  //upperCase choice
  var confirmUpperCase = confirm("Do you want uppercase letters?");
  if(confirmUpperCase === true)
  {
    userPasswordChoice.hasUpperCase = true;
    userPasswordChoice.selectionCount++;
  }
  else
  {
    userPasswordChoice.hasUpperCase = false;
  }

//lowerCase choice
  var confirmLowerCase = confirm("Do you want lowercase letters?");
  if(confirmLowerCase === true)
  {
    userPasswordChoice.hasLowerCase = true;
    userPasswordChoice.selectionCount++;
  }
  else
  {
    userPasswordChoice.hasLowerCase = false;
  }

//number choice
  var confirmNumbers = confirm("Do you want numbers?");
  if(confirmNumbers === true)
  {
    userPasswordChoice.hasNumbers = true;
    userPasswordChoice.selectionCount++;
  }
  else
  {
    userPasswordChoice.hasNumbers = false;
  }

  //special character choice
  var confirmSpecialChars = confirm("Do you want special characters?");
  if(confirmSpecialChars === true)
  {
    userPasswordChoice.hasSpecialCharacters = true;
    userPasswordChoice.selectionCount++;
  }
  else
  {
    userPasswordChoice.hasSpecialCharacters = false;
  }
}

//validate user entered values
var validateUserEntry = function(userEntry){

  var userValue = parseInt(userEntry);
  

  //checkk for number and length
  if(isAValidNumber(userValue)  && isValidLength(userValue))
  {
    return true;
  }
  else{
    return false;
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

//check if user selected atleast 1 type
var hasValidTypeSelection = function(){
  return userPasswordChoice.isValid();
}

//
var displayPassword = function(){

  if(hasValidTypeSelection()){
    return userPasswordChoice.generatePassword();
  }
  else{
    alert("You must select atleast one password type.");
    return;
  }

}

//create password
function generatePassword(){
  
    
    var userEntry = prompt("How long do you want your password to be?","Please select a number between 8 and 128");
    userPasswordChoice.initializeUserPassword();

    //check if value entered is numeric
    if(!validateUserEntry(userEntry))
    {
      userPassword.errorInvalidNumberMessage();
      writePassword();
    }
    else
    {
        userPasswordChoice.passwordLength = userEntry;
        
        //prompt and store user password config choices
        captureUserPasswordChoices();
        
        //return password
        return displayPassword();
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


