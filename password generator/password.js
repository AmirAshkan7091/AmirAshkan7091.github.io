// Assignment Code
let pass={
        special_characters:[` !#$%&'()*+-./:";<=>,?@[]^_{|}~`],
        numbers:["1234567890"],
        lowerCaseLetter:["qwertyuiopasdfghjklzxcvbnm"],
        upperCaseLetter:["QWERTYUIOPASDFGHJKLZXCVBNM"],
  }
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  function generatePassword(){

    let amir =confirm("would you like to have a strong pass?");
    console.log(amir)
  
    if(amir===true){
  
    let aslan=parseInt(prompt("how many special characters would you like your pass to be?"));
    console.log(aslan);
        for(let i=0;i<=aslan;i++){
  
          let randomSpecialCharacters= pass.special_characters[Math.floor(Math.random() * pass.special_characters.length)];
          console.log(randomSpecialCharacters[i]);


        }


    let arsalan=parseInt(prompt("how many numbers would you like your pass to be?"));
    console.log(arsalan);
        for(let i=0;i<arsalan;i++){

          let randomNumbers= pass.numbers[Math.floor(Math.random() *pass.numbers.length)];
          console.log(randomNumbers[i]);

        }


    let ardalan=parseInt(prompt("how many lower case of letters would you like your pass to be?"));
    console.log(ardalan);
        for(let i=0;i<ardalan;i++){
          let randomLowerCaseLetter= pass.lowerCaseLetter[Math.floor(Math.random() *pass.lowerCaseLetter.length)];
          console.log(randomLowerCaseLetter[i]);


        }


    let arastoo=parseInt(prompt("how many capital letters would you like your pass to be?"));
    console.log(arastoo);
        for(let i=0;i<arastoo;i++){

          let randomUpperCaseLetter= pass.upperCaseLetter[Math.floor(Math.random() *pass.upperCaseLetter.length)];
          console.log(randomUpperCaseLetter[i]);

        }
    }else if(amir===false){
      alert("you will get hacked easily!!");
    }
  }



  var password =generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
