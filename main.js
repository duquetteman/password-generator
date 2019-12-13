// var generatePassEl = document.getElementById("generatePass");
// generatePassEl.addEventListener("click") {
	
// }

var howManyCharacters = parseInt(prompt("How many characters?"))
	var includeSpecialCharacters = confirm("Do you want special characters?")
	var includeLowerCaseLetters = confirm("Do you want upper case letters?")
	var includeUpperCaseLetters = confirm("Do you want lower case letters?")
	var includeNumbers = confirm("Do you want numbers?")

// How do I save the answers from these prompts? 

// console.log(howManyCharacters, includeSpecialCharacters, includeLowerCaseLetters, includeUpperCaseLetters, includeNumbers)



//need a global variable that we can modify to add these characters

//define a variable
let userPassword = [];

//for loop based on howManyCharacters
//conditionals on what to add

//iterator, how long, how much it should increment
for (var i = 0; i < (howManyCharacters); i++) {
	//if they want special characters add them
	if (includeSpecialCharacters) {
		symbolCharacter()
	}
	//if they want lowercase add them
	if (includeLowerCaseLetters) {
		lowerCharacter()
	}

	//if they want numbers add them
	if (includeNumbers) {
		numberCharacter()
	}
	//if they want uppercase add them 
	if (includeUpperCaseLetters) {
		numberCharacter()
	}
}
// console.log(userPassword);

// Eric mentioned Concat array. Making an array from a previous list. 
// Concat just makes a new array using the data from other arrays. How do I get the array data without the commas? Can I use .join? 




function passwordResult() {


	//add to that variable

}

function symbolCharacter() {
	const symbol = "!@#$%^&*(){}[]=<>/,."
	var randomSymbol = symbol[Math.floor(Math.random() * symbol.length)];
	// console.log(randomSymbol);
	userPassword.push(randomSymbol)

}
symbolCharacter();
// console.log(symbolCharacter());



function upperCharacter() {
	const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	var randomUpper = upper[Math.floor(Math.random() * upper.length)];
	// console.log(randomUpper);
	userPassword.push(randomUpper);
}

upperCharacter();
// console.log(upperCharacter());



function lowerCharacter() {
	const lower = "abcdefghijklmnopqrstuvwxyz"
	var randomLower = lower[Math.floor(Math.random() * lower.length)];
	// console.log(randomLower);
	userPassword.push(randomLower);
}
lowerCharacter();



function numberCharacter() {
	const number = "0123456789"
	var randomNumber = number[Math.floor(Math.random() * number.length)];
	// console.log(randomNumber);
	userPassword.push(randomNumber);
}
numberCharacter();

document.getElementById("exampleFormControlTextarea1").value = userPassword;