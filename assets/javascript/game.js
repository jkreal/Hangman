/*TODO:~~~~~~~~~~~
	Pass through method which wordset to use
	Click letter buttons
	Make letters appear over underscores
	Handle a win/loss*/

var overGame = false;
var win = false;
var underscore = ' ';
var guesses = -1;
var wordsetSelection = 'default';
var word = '@';
var wordArray = [];
var guessArray = [];

var dropdownLine = document.getElementById("dropdown-line");
var wordsetDropdown = document.getElementById("wordset-dropdown");
var wordset1 = document.getElementById("wordset-1");
var wordset2 = document.getElementById("wordset-2");
var wordset3 = document.getElementById("wordset-3");

var statusText = document.getElementById("status-text");

var playButton = document.getElementById("play-btn");

var letterButtons = document.getElementById("letter-buttons");

var playLine = document.getElementById("play");

var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];

var elements = ['HELIUM', 'ARGON', 'POTASSIUM', 'OXYGEN', 'HYDROGEN'];
var webdev = ['ELEMENT', 'ARRAY', 'JQUERY', 'JAVASCRIPT', 'HTML', 'STRING'];
var calculus = ['INTEGRAL', 'DERIVATIVE'];

var image = document.getElementById('hangman-image');
var playGame = false;

// Onload
window.onload = function () {

	wordset1.addEventListener("click", function () {
		wordsetDropdown.innerHTML = wordset1.innerHTML + ' <span class="caret"></span>';
		wordsetSelection = 'elements';
	});

	wordset2.addEventListener("click", function () {
		wordsetDropdown.innerHTML = wordset2.innerHTML + ' <span class="caret"></span>';
		wordsetSelection = 'webdev';
	});

	wordset3.addEventListener("click", function () {
		wordsetDropdown.innerHTML = wordset3.innerHTML + ' <span class="caret"></span>';
		wordsetSelection = 'calculus';
	});

	playButton.addEventListener("click", function () {
		playGameButton();

	});
}

function reset() {
	image.src = "./assets/images/hangman-2.png";
	overGame = false;
	win = false;
	underscore = ' ';
	guesses = -1;
	wordsetSelection = 'default';
	word = '@';
	wordArray = [];
	guessArray = [];
}

function removeChildren(item) {
	for (var i = 1; i < item.childElementCount; i++) {
		if (item.hasChildNodes) {
			item.removeChild(item.childNodes[i]);
			console.log("child removed");
		}
	}
}

function generateText(array) {
	var hiddenDisplay = '';
	word = array[Math.floor(Math.random() * elements.length)];
	wordArray = word.split('');

	underscore = document.createElement('H3');

	console.log(underscore);
	console.log(word.length);

	for (var i = 0; i < word.length; ++i) {
		hiddenDisplay += '_ ';
		guessArray.push('_');
	}

	var content = document.createTextNode(hiddenDisplay);
	underscore.appendChild(content);
	underscore.id = 'hidden-word';

	console.log(hiddenDisplay);
	playLine.appendChild(underscore);
	console.log(underscore);
}

function playGameButton() {
	playGame = true;
	startGame();
}

function startGame() {
	if (overGame === false) {
		switch (wordsetSelection) {
			case 'default':
				alert("You must choose a wordset to continue!");
				break;
			case 'elements':
				document.getElementById("status-text").innerHTML = "<h2>Wordset: Chemistry Elements</h2>";
				playButton.style.visibility = 'hidden';
				wordsetDropdown.style.visibility = 'hidden';
				if (playLine.hasChildNodes) {
					playLine.removeChild(playButton);
				}
				generateLetters();
				generateText(elements);
				break;
			case 'webdev':
				document.getElementById("status-text").innerHTML = "<h2>Wordset: Web Development</h2>";
				playButton.style.visibility = 'hidden';
				wordsetDropdown.style.visibility = 'hidden';
				if (playLine.hasChildNodes) {
					playLine.removeChild(playButton);
				}
				generateLetters();
				generateText(webdev);
				break;
			case 'calculus':
				document.getElementById("status-text").innerHTML = "<h2>Wordset: Calculus</h2>";
				playButton.style.visibility = 'hidden';
				wordsetDropdown.style.visibility = 'hidden';
				if (playLine.hasChildNodes) {
					playLine.removeChild(playButton);
				}
				generateLetters();
				generateText(calculus);
				break;
			default:
				alert("Please select a wordset to continue!");
				break;
		}

	} else {
		playAgain();
	}
}

function playAgain() {
	removeChildren(playLine);
	removeChildren(dropdownLine);
	removeChildren(playLine);
	removeChildren(playLine);
	removeChildren(playLine);

	playLine.appendChild(playButton);
	dropdownLine.appendChild(wordsetDropdown);
	wordsetDropdown.style.visibility = 'visible';
}

function generateLetters() {
	guesses = 7;
	setImage();

	for (var i = 0; i < 26; i++) {

		var letter = document.createElement("BUTTON");
		var content = document.createTextNode(letters[i]);


		if (letters[i] == "A" || letters[i] == "E" || letters[i] == "I" || letters[i] == "O" || letters[i] == "U") {
			letter.className = 'button btn-info letter';
		} else {
			letter.className = 'button btn-default letter';
		}

		letter.setAttribute('type', "button");
		letter.id = 'letter-' + letters[i];
		letter.appendChild(content);
		letter.setAttribute('letter', letters[i]);

		letter.style.position = 'relative';
		letter.style.marginLeft = '2px';

		letter.addEventListener("click", function () {
			findLetters(this.getAttribute('letter'));
		});

		letterButtons.appendChild(letter);
	}

	function findLetters(letter) {
		if (playGame === true) {
			console.log(wordArray);
			console.log(guessArray);
			console.log(letter);

			if (wordArray.includes(letter)) {
				for (var i = 0; i < wordArray.length; ++i) {
					if (wordArray[i] == letter) {
						guessArray[i] = wordArray[i];
					}
				}
				console.log(guessArray);
			} else {
				guesses -= 1;
			}

			document.getElementById('letter-' + letter).remove();
			updateGame();

		}
	}

	function updateGame() {

		removeChildren(playLine);
		playLine.appendChild(underscore);
		updateHiddenWord();

		setImage();
		if (guesses <= 0) {
			win = false;
			gameOver();
		}

		if (!guessArray.includes("_")) {
			win = true;
			gameOver();
		}
	}

	function updateHiddenWord() {
		var hiddenDisplay = '';
		for (var i = 0; i < word.length; ++i) {
			if (guessArray[i] != "_") {
				hiddenDisplay += guessArray[i] + ' ';
			}
			else {
				hiddenDisplay += '_ ';
			}

		}
		var content = document.createTextNode(hiddenDisplay);
		underscore.appendChild(content);
		underscore.removeChild(underscore.childNodes[0]);
	}

	function gameOver() {
		playGame = false;
		overGame = true;
		if (win === true) {
			statusText.innerHTML = "<h2>You win!!</h2>";
		} else {
			statusText.innerHTML = "<h2>LOSER!</h2>";
			updateHiddenWord();
		}

		removeChildren(dropdownLine);
		dropdownLine.appendChild(playButton);
		playButton.style.visibility = 'visible';
		playButton.innerHTML = 'Play Again!';
	}

	function setImage() {
		switch (guesses) {
			case 0:
				image.src = "./assets/images/hangman-9.png";
				break;
			case 1:
				image.src = "./assets/images/hangman-8.png";
				break;
			case 2:
				image.src = "./assets/images/hangman-7.png";
				break;
			case 3:
				image.src = "./assets/images/hangman-6.png";
				break;
			case 4:
				image.src = "./assets/images/hangman-5.png";
				break;
			case 5:
				image.src = "./assets/images/hangman-4.png";
				break;
			case 6:
				image.src = "./assets/images/hangman-3.png";
				break;
			case 7:
				image.src = "./assets/images/hangman-2.png";
				break;
			case 8:
				image.src = "./assets/images/hangman-1.png";
				break;
			default:
				break;
		}
	}

}
