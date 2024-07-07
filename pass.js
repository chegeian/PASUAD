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
