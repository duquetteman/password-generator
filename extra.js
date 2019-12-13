
// This is where I was storing my ideas, notes, and functions as I built the project. This code is not included in the final project. 


console.log(userPassword);

Eric mentioned Concat array. Making an array from a previous list. 
Concat just makes a new array using the data from other arrays. How do I get the array data without the commas? Can I use .join? 


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

function getRandom(arr) {
	const length = arr.length;
	randomIndex = arr[Math.floor(Math.random() * length)];
	return randomIndex;
}

document.getElementById("exampleFormControlTextarea1").value = charSet