const passwordBox = document.getElementById('password');
const length = 10;

const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

const allChars = upperChars + lowerChars + numbers + symbols

function createPassword(){
  let password = '';

  password += upperChars[Math.floor(Math.random() * upperChars.length)];
  password += lowerChars[Math.floor(Math.random() * lowerChars.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

while(length > password.length) {
  password += allChars[Math.floor(Math.random() * allChars.length)];

}
passwordBox.value = password;
}


function copyPassword() {
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
};
