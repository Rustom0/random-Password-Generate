const passwordBox = document.getElementById("Password");
const length = 12; // Default password length
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
const allCharacters = uppercase + lowercase + numbers + symbols;

function generatePassword() {
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }
    passwordBox.value = password;
};
function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}
