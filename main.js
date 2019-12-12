
var howManyCharacters = prompt("How many characters?")
var includeSpecialCharacters = confirm("Do you want special characters?")
var includeLowerCaseLetters = confirm("Do you want upper case letters?")
var includeUpperCaseLetters = confirm("Do you want lower case letters?")
var includeNumbers = confirm("Do you want numbers?")
// How do I save the answers from these prompts? 

console.log(howManyCharacters, includeSpecialCharacters, includeLowerCaseLetters, includeUpperCaseLetters, includeNumbers)


function passwordResult() {
	return {
	symbol: symbolCharacter(),
	upper: upperCharacter(),
	lower: lowerCharacter(),
	number: numberCharacter()
}
}

console.log(  passwordResult()   );
// Concat array. Making an array from a previous list. 


function symbolCharacter() {
	const symbol = '!@#$%^&*(){}[]=<>/,.'
	return symbol[Math.floor(Math.random() * symbol.length)];
}
console.log(symbolCharacter());



function upperCharacter() {
	const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	return upper [Math.floor(Math.random() * upper.length)];
}
console.log(upperCharacter());



function lowerCharacter () {
	const upper = "abcdefghijklmnopqrstuvwxyz"
	return upper [Math.floor(Math.random() * upper.length)];
}
console.log(lowerCharacter());



function numberCharacter () {
	const number = "0123456789"
	return number [Math.floor(Math.random() * number.length)];
}
console.log(numberCharacter());

