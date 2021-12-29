// function to get random number generator

let randNumb;
let randomNumb = function () {
	randNumb = Math.floor(Math.random() * 3);
	console.log(`the random number is ${randNumb}`);
};

//function to check data of user input and random number generator if they are the same

let guessCheck = function (randomNumber, guessUser) {
	//if statement to check if the arguments are the same
	if (Number(randomNumber) === Number(guessUser)) {
		console.log(`${randomNumber} is equal to the user's guess of ${guessUser}`);
		document.getElementById(
			'msgToUserDisplay'
		).innerHTML = `<i class="fas fa-check-circle fa-2x"></i> Correct Answer`;
	} else if (Number(randomNumber) > Number(guessUser)) {
		console.log(`${randomNumber} is bigger than the ${guessUser}`);
		document.getElementById(
			'msgToUserDisplay'
		).innerHTML = `<i class="fas fa-arrow-down fa-2x"></i> Too low`;
	} else {
		console.log(`${randomNumber} is less than the ${guessUser}`);
		document.getElementById(
			'msgToUserDisplay'
		).innerHTML = `<i class="fas fa-arrow-up fa-2x"></i> Too high`;
	}
};

//function to store the user input

let checkBtn = 'userInputCheckBtn';
let userInput = 'userinput';
let userGuess;

document.getElementById(checkBtn).addEventListener('click', function () {
	console.log('guess check button clicked');
	userGuess = document.getElementById(userInput).value;
	console.log(`the user guess is ${userGuess}`);
	randomNumb();

	guessCheck(randNumb, userGuess);
});

//function to give user feedback on where their numbers land

// document.getElementById('msgToUserDisplay').innerHTML = 'Correct Answer';

//function to change background color

//function to render - the question mark replaced with guess

//function to update highsore

//function tp update cuurent score

//function to reset game except for high score
