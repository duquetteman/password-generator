// Verify how many characters long the user wants the password to be.
var howManyCharacters = parseInt(prompt("Please enter a number between 8 and 128"))
// Conditional to set the range of password characters necessary for the page to work. 
if (howManyCharacters  < 8 || howManyCharacters > 128){;
	alert("Press OK to start over and pick a number between 8 and 128")
	location.reload()
}
// If the user gives a valid number input, run these else confirms.
else {
var includeSpecialCharacters = confirm("Tap OK to include SPECIAL CHARACTERS")
var includeLowerCaseLetters = confirm("Tap OK to include LOWERCASE LETTERS")
var includeUpperCaseLetters = confirm("Tap OK to include UPPERCASE LETTERS")
var includeNumbers = confirm("Tap OK to include NUMBERS")
var symbol = "!@#$%^&*(){}[]=<>/,.";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var charSet = "";
}
//Then it will run this function, which will look at whether each of the confirms from above are true. If they are then it will add the string of characters from the strings above into a new string called charSet. 
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
// If the user hits cancel for each of the confirms above, then it will display this message. Once they hit OK on the alert box, it will reload the page and force them to select criteria again. 
if (charSet == ""){
	alert("Password must include at least one character option. Press OK to refresh the page and start over.")
	location.reload();
}
// For loop that will generate the length of the final password based on the nubember selected from the inital character prompt. 
var userPassword = "";
	for (var i = 0; i < howManyCharacters; i++) {
userPassword += charSet[Math.floor(Math.random() * charSet.length)];
	} 	
document.getElementById('password').value = userPassword;
}
//This is looking for the click from the user. When they press the button, it displays the password in the text box. 
generateBtn = document.getElementById("generatePass")
generateBtn.addEventListener("click", passwordResult);
// This controls the copy to clipboard function. 
function copyToClipboard() {
	var copyText = document.getElementById("password");
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	document.execCommand("copy");

alert("Copied the text: " + copyText.value);
}
copyBtn = document.getElementById("copy");
copyBtn.addEventListener("click", copyToClipboard);
