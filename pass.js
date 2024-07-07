const characters = {
    letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(''),
    numbers: "0123456789".split(''),
    symbols: "~`!@#$%^&*()-_=+[{]}|;:'<,>.?/".split('')
};

let passEl = document.getElementById("pass1");
let passIl = document.getElementById("pass2");

function generate() {
    let length = document.getElementById("length").value;
    let includeNumbers = document.getElementById("includeNumbers").checked;
    let includeSymbols = document.getElementById("includeSymbols").checked;

    let availableCharacters = [...characters.letters];
    if (includeNumbers) availableCharacters = availableCharacters.concat(characters.numbers);
    if (includeSymbols) availableCharacters = availableCharacters.concat(characters.symbols);

    let password1 = generatePassword(length, availableCharacters);
    let password2 = generatePassword(length, availableCharacters);

    passEl.textContent = password1;
    passIl.textContent = password2;
}

function generatePassword(length, availableCharacters) {
    let password = "";
    for (let i = 0; i < length; i++) {
        password += availableCharacters[Math.floor(Math.random() * availableCharacters.length)];
    }
    return password;
}

function copyToClipboard(elementId) {
    let text = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert("Password copied to clipboard!");
    }).catch(err => {
        alert("Failed to copy password: ", err);
    });
}


//  const characters = [
//     "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
//     "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
//     "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
//     "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
// ];

// let passEl = document.getElementById("pass1");
// let passIl = document.getElementById("pass2");

// function generate() {
//     let password1 = "";
//     let password2 = "";

//     for (let i = 0; i < 15; i++) {
//         password1 += characters[Math.floor(Math.random() * characters.length)];
//         password2 += characters[Math.floor(Math.random() * characters.length)];
//     }

//     passEl.textContent = password1;
//     passIl.textContent = password2;
// }
