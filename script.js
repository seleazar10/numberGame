// function to get random number generator
let randNumb;
let randomNumb = function () {
	randNumb = Math.floor(Math.random() * 3);
	console.log(`the random number is ${randNumb}`);
};

//function to compare user guess and random number generator

let guessCheck = function (randomNumber, guessfromUser) {
	let initialScore = Number(document.getElementById('scoreSpan').innerHTML);
	let currentHighScore = Number(
		document.getElementById('highscoreSpan').innerHTML
	);
	let changeOps;

	console.log(`the guess is ${guessfromUser}`);

	//if statement to check if the arguments are the same
	if (Number(randomNumber) === Number(guessfromUser)) {
		document.getElementById(
			'msgToUserDisplay'
		).innerHTML = `<i class="fas fa-check-circle fa-2x"></i> Correct Answer`;
		changeOps = 1;
		updateScore(initialScore, changeOps);
		replaceCenterChoice(randomNumber);
		changeBckgrndColor('green');

		updateHighScore(Number(guessfromUser), currentHighScore);
	} else if (Number(randomNumber) > Number(guessfromUser)) {
		document.getElementById(
			'msgToUserDisplay'
		).innerHTML = `<i class="fas fa-arrow-down fa-2x"></i> Too low`;
		changeOps = -1;
		updateScore(initialScore, changeOps);
		replaceCenterChoice(randomNumber);
		changeBckgrndColor('red');
	} else {
		document.getElementById(
			'msgToUserDisplay'
		).innerHTML = `<i class="fas fa-arrow-up fa-2x"></i> Too high`;
		changeOps = -1;
		updateScore(initialScore, changeOps);
		replaceCenterChoice(randomNumber);
		changeBckgrndColor('red');
	}
};

//function to update current score
let updateScore = function (initialScore, changeOperation) {
	let newScoreToDispay = initialScore + changeOperation;
	document.getElementById('scoreSpan').innerHTML = newScoreToDispay;
};

//function to render - the question mark replaced with guess
let replaceCenterChoice = function (theUserGuess) {
	document.getElementById('centerSelection').innerHTML = theUserGuess;
};
//function to change background color

let changeBckgrndColor = function (bgcolor) {
	document.body.style.background = bgcolor;
};

//function to store the user input
let checkBtn = 'userInputCheckBtn';
let replayBtn = 'playAgainBtn';
let userInput = 'userinput';
let userGuess;

///start game on click

document.getElementById(checkBtn).addEventListener('click', function () {
	randomNumb();
	userGuess = document.getElementById(userInput).value;
	guessCheck(randNumb, userGuess);
});

//reset game on click
document.getElementById(replayBtn).addEventListener('click', function () {
	document.body.style.background = 'black';
	document.getElementById(userInput).value = ' ';
	document.getElementById('scoreSpan').innerHTML = 20;
	document.getElementById('highscoreSpan').innerHTML = 0;

	document.getElementById(
		'centerSelection'
	).innerHTML = `<i class="fas fa-question-circle fa-3x"></i>`;
	document.getElementById(
		'msgToUserDisplay'
	).innerHTML = `<i class="fas fa-chart-bar fa-2x"></i> Start Guessing`;
});

//function to update highsore

let updateHighScore = function (guessOfUser, currHighScore) {
	if (guessOfUser > currHighScore) {
		document.getElementById('highscoreSpan').innerHTML = guessOfUser;
		console.log('new high score');
	} else {
		console.log('current score is lower than high score');
	}
};
