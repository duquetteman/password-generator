// Verify how many characters long the user wants the password to be.
var howManyCharacters = parseInt(prompt("How many characters long would you like your password to be? It must be between 8 and 128 characters."))
// Conditional to set the range of password characters necessary for the page to work. 
if (howManyCharacters  < 8 || howManyCharacters > 128){;
	alert("Hey there, fancy pants... password must be between 8 and 128 number long. Press OK to refresh the page and start Over.")
	location.reload()
}


else {
var includeSpecialCharacters = confirm("Do you want SPECIAL CHARACTERS?")
var includeLowerCaseLetters = confirm("Do you want LOWER CASE LETTERS?")
var includeUpperCaseLetters = confirm("Do you want UPPER CASE LETTERS?")
var includeNumbers = confirm("Do you want NUMBERS?")
var symbol = "!@#$%^&*(){}[]=<>/,.";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var charSet = "";
}




function passwordResult() {
if (includeSpecialCharacters) { 
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
	alert("Password must include at least one character option. Press OK to refresh the page and start Over.")
	location.reload();
}

var userPassword = "";
	for (var i = 0; i < howManyCharacters; i++) {
userPassword += charSet[Math.floor(Math.random() * charSet.length)];
	} 	
document.getElementById('password').value = userPassword;
}

generateBtn = document.getElementById("generatePass")
generateBtn.addEventListener("click", passwordResult);

function copyToClipboard() {
	var copyText = document.getElementById("password");
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	document.execCommand("copy");

alert("Copied the text: " + copyText.value);
}

copyBtn = document.getElementById("copy");
copyBtn.addEventListener("click", copyToClipboard);
