let checkBtn = 'userInputCheckBtn';
let popUpInfo = document.getElementById(`popUpInfo`);
let popUpBgd = document.getElementById(`popUpBgd`);
let userInput = 'userinput';
let msgToUserUI = document.getElementById('msgToUserDisplay');
let centerSelection = document.getElementById('centerSelection');
let userGuess, randNumb, changeOps;
let navBtn = document.querySelectorAll('.nav-btn');
console.log(navBtn);
let popUp = document.querySelectorAll('.pop-up');

for (let i = 0; i < popUp.length; i++) {
	popUp[i].addEventListener('click', function () {
		closePopUp();
	});
}

for (let i = 0; i < navBtn.length; i++) {
	console.log(navBtn[i]);

	navBtn[i].addEventListener('click', function () {
		if (navBtn[i].id === 'playAgainBtn') {
			console.log(`id relate to the firs button`);

			resetGame();
		} else if (navBtn[i].id === `gameInfo`) {
			displayPopUp();
		}
	});
}

// function to get random number generator

let randomNumb = function () {
	randNumb = Math.floor(Math.random() * 21);
	console.log(`the random number is ${randNumb}`);
};

//function to compare user guess and random number generator
let guessCheck = function (randomNumber, guessfromUser) {
	let initialScore = Number(document.getElementById('scoreSpan').innerHTML);

	let currentHighScore = Number(
		document.getElementById('highscoreSpan').innerHTML
	);
	console.log(`the guess is ${guessfromUser}`);

	// add condition to run the game only if initial score is higher than 0
	if (initialScore > 0) {
		//if statement to check if the arguments are the same
		if (Number(randomNumber) === Number(guessfromUser)) {
			msgToUserUI.innerHTML = `<i class="fas fa-check-circle fa-2x"></i> Correct Answer🎉`;
			changeOps = 1;
			updateScore(initialScore, changeOps);
			replaceCenterChoice(randomNumber);
			changeBckgrndColor('green');
			updateHighScore(Number(guessfromUser), currentHighScore);
		} else if (Number(randomNumber) !== Number(guessfromUser)) {
			msgToUserUI.innerHTML =
				Number(randomNumber) > Number(guessfromUser)
					? `<i class="fas fa-arrow-down fa-2x"></i> Too low`
					: `<i class="fas fa-arrow-up fa-2x"></i> Too high`;
			changeOps = -1;
			updateScore(initialScore, changeOps);
			replaceCenterChoice(randomNumber);
			changeBckgrndColor('red');
		}
	} else {
		console.log('You have lost the game, press again to restart');
		msgToUserUI.innerHTML = `⛔️ You lost! Press "AGAIN" to continue`;
	}
};

//function to update current score
let updateScore = function (initialScore, changeOperation) {
	let newScoreToDispay = initialScore + changeOperation;
	document.getElementById('scoreSpan').innerHTML = newScoreToDispay;
};

//function to render number to guess - the question mark replaced with guess
let replaceCenterChoice = function (theUserGuess) {
	centerSelection.innerHTML = `Number: ${theUserGuess}`;
};

//function to change background color
let changeBckgrndColor = function (bgcolor) {
	document.querySelector('body').style.backgroundColor = bgcolor;
	centerSelection.style.fontSize = '150%';
};

///start game on click
document.getElementById(checkBtn).addEventListener('click', function () {
	randomNumb();
	userGuess = document.getElementById(userInput).value;
	if (!userGuess) {
		console.log('no number guessed');
		msgToUserUI.innerHTML = `🛑 No number guessed`;
	} else {
		console.log('there is a number');
		guessCheck(randNumb, userGuess);
	}
});

//reset game on click

let resetGame = function () {
	document.body.style.background = 'black';
	document.getElementById(userInput).value = ' ';
	document.getElementById('scoreSpan').innerHTML = 20;
	centerSelection.innerHTML = `<i class="fas fa-question-circle fa-3x"></i>`;
	msgToUserUI.innerHTML = `<i class="fas fa-chart-bar fa-2x"></i> Start Guessing`;
};

let displayPopUp = function () {
	popUpInfo.classList.remove('hidden');
	popUpBgd.classList.remove('hidden');
};

let closePopUp = function () {
	popUpInfo.classList.add('hidden');
	popUpBgd.classList.add('hidden');
};

let updateHighScore = function (guessOfUser, currHighScore) {
	if (guessOfUser > currHighScore) {
		document.getElementById('highscoreSpan').innerHTML = guessOfUser;
		console.log('new high score');
	} else {
		console.log('current score is lower than high score');
	}
};

document.addEventListener('keydown', function (e) {
	console.log(e);
	e.key === 'Escape' ? closePopUp() : 'none';
});
