let characterLength = 8;
let choiceArray = [];

let specialCharacterArray = ["!","@","#","$","%","^","&","*","(",")","[","]","{","}","|","?","/","<",">"];
let lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let numberArray = ["1","2","3","4","5","6","7","8","9","0"];

var generateBtn = document.querySelector("#generate");

function writePassword() {
  getPrompts();
  let passwordText = document.querySelector("#password");

  if (choiceArray.length) {
    let newPassword = generatePassword();
    passwordText.value = newPassword;
} else {
    passwordText.value = "";

}
}

function generatePassword() {
    let password = "";
    for(let i = 0; i < characterLength; i++) {
        let randomIndex = Math.floor(Math.random() * choiceArray.length);
        password = password + choiceArray[randomIndex];
    }
    return password;
  }
  
  function getPrompts(){
     characterLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characters")); 
       
     if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
       alert("Character length has to be a number, 8 - 128 digits. Please try again.");
       return false;
     }
     if (confirm("Would you like lowercase letters in your password?"))  {
         choiceArray = choiceArray.concat(lowerCaseArray);
     }
     if (confirm("Would you like uppercase letters in your password?"))  {
      choiceArray = choiceArray.concat(upperCaseArray);
     }
     if (confirm("Would you like special characters in your password?"))  {
     choiceArray = choiceArray.concat(specialCharacterArray);
     }
     if (confirm("Would you like numbers in your password?"))  {
     choiceArray = choiceArray.concat(numberArray);
     }
    }
    
    generateBtn.addEventListener("click", writePassword);
