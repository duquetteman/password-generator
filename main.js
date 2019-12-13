// var generatePassEl = document.getElementById("generatePass");
// generatePassEl.addEventListener("click") {
	
// }

var howManyCharacters = parseInt(prompt("How many characters?"))
var includeSpecialCharacters = confirm("Do you want special characters?")
var includeLowerCaseLetters = confirm("Do you want upper case letters?")
var includeUpperCaseLetters = confirm("Do you want lower case letters?")
var includeNumbers = confirm("Do you want numbers?")
var symbol = "!@#$%^&*(){}[]=<>/,.";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var charSet = "";

if (howManyCharacters < 8 || > 128){
	alert("Password must be between 8 and 128 characters. Please refresh the page and start Over.")
}

function passwordResult() {
if (includeSpecialCharacters) {
	// Do I need something here that references the symbol variable? 
	charSet += symbol;
}

if (includeLowerCaseLetters) {
	charSet += lower;
}

if (includeUpperCaseLetters) {
	charSet += upper;
}

if (includeNumbers) {
	charSet += number;
}

if (charSet == ""){
	alert("Password must include at least one character option. Please refresh the page and make new choices.")
}

var userPassword = "";
	for (var i = 0; i < howManyCharacters; i++) {
userPassword += charSet[Math.floor(Math.random() * charSet.length)];
	} 	
document.getElementById('password').value = userPassword;
}
generateBtn = document.getElementById("generatePass")
generateBtn.addEventListener("click", passwordResult);
