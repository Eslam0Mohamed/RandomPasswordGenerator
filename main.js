const passwordBox = document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUZYXWZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const sympol ="@#$%^&*()_+~|}{[]></-=";

allCars = upperCase + lowerCase + number + sympol;
function createPassword(){
let password = "";
password += upperCase[Math.floor(Math.random() * upperCase.length)];
password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
password += number[Math.floor(Math.random() * number.length)];
password += sympol[Math.floor(Math.random() * sympol.length)];

while(length > password.length){
    password += allCars[Math.floor(Math.random() * allCars.length)];
}
passwordBox.value = password;
console.log(password)
}
// createPassword()
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}