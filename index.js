const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let themeToggleBtn = document.querySelector('.theme-toggle');
let boxOne = document.querySelector(".box.one")
let boxTwo = document.querySelector(".box.two")

// It doesn't need of log in the product
console.log(boxOne);

function generatePassword () {

    boxOne.textContent = " ";
    boxTwo.textContent = " ";
    // Good Job
    for (let i = 0; i < 15; i++) {
        let indexOne = Math.floor(Math.random() * characters.length);
        let indexTwo = Math.floor(Math.random() * characters.length);
        
        boxOne.textContent += characters[indexOne];
        boxTwo.textContent += characters[indexTwo];
    }    
}

themeToggleBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
})


