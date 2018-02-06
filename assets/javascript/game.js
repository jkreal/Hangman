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
var again = false;
var image = document.getElementById('hangman-image');
var playGame = false;
var wins = 0;
var losses = 0;
var guessedLetters = '';

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

	document.addEventListener("keyup", function (event) {
		if (playGame) {
			switch (event.key) {
				case 'a':
					if (document.getElementById('letter-' + event.key.toUpperCase()) != null) {
						document.getElementById('letter-' + event.key.toUpperCase()).click();
					}
					break;
				case 'b':
					if (document.getElementById('letter-' + event.key.toUpperCase()) != null) {
						document.getElementById('letter-' + event.key.toUpperCase()).click();
					}
					break;
				case 'c':
					if (document.getElementById('letter-' + event.key.toUpperCase()) != null) {
						document.getElementById('letter-' + event.key.toUpperCase()).click();
					}
					break;
				case 'd':
					if (document.getElementById('letter-' + event.key.toUpperCase()) != null) {
						document.getElementById('letter-' + event.key.toUpperCase()).click();
					}
					break;
				case 'e':
					if (document.getElementById('letter-' + event.key.toUpperCase()) != null) {
						document.getElementById('letter-' + event.key.toUpperCase()).click();
					}
					break;
				case 'f':
					if (document.getElementById('letter-' + event.key.toUpperCase()) != null) {
						document.getElementById('letter-' + event.key.toUpperCase()).click();
					}
					break;
				case 'g':
					if (document.getElementById('letter-' + event.key.toUpperCase()) != null) {
						document.getElementById('letter-' + event.key.toUpperCase()).click();
					}
					break;
				case 'h':
					if (document.getElementById('letter-' + event.key.toUpperCase()) != null) {
						document.getElementById('letter-' + event.key.toUpperCase()).click();
					}
					break;
				case 'i':
					if (document.getElementById('letter-' + event.key.toUpperCase()) != null) {
						document.getElementById('letter-' + event.key.toUpperCase()).click();
					}
					break;
				case 'j':
					if (document.getElementById('letter-' + event.key.toUpperCase()) != null) {
						document.getElementById('letter-' + event.key.toUpperCase()).click();
					}
					break;
				case 'k':
					if (document.getElementById('letter-' + event.key.toUpperCase()) != null) {
						document.getElementById('letter-' + event.key.toUpperCase()).click();
					}
					break;
				case 'l':
					if (document.getElementById('letter-' + event.key.toUpperCase()) != null) {
						document.getElementById('letter-' + event.key.toUpperCase()).click();
					}
					break;
				case 'm':
					if (document.getElementById('letter-' + event.key.toUpperCase()) != null) {
						document.getElementById('letter-' + event.key.toUpperCase()).click();
					}
					break;
				case 'n':
					if (document.getElementById('letter-' + event.key.toUpperCase()) != null) {
						document.getElementById('letter-' + event.key.toUpperCase()).click();
					}
					break;
				case 'o':
					if (document.getElementById('letter-' + event.key.toUpperCase()) != null) {
						document.getElementById('letter-' + event.key.toUpperCase()).click();
					}
					break;
				case 'p':
					if (document.getElementById('letter-' + event.key.toUpperCase()) != null) {
						document.getElementById('letter-' + event.key.toUpperCase()).click();
					}
					break;
				case 'q':
					if (document.getElementById('letter-' + event.key.toUpperCase()) != null) {
						document.getElementById('letter-' + event.key.toUpperCase()).click();
					}
					break;
				case 'r':
					if (document.getElementById('letter-' + event.key.toUpperCase()) != null) {
						document.getElementById('letter-' + event.key.toUpperCase()).click();
					}
					break;
				case 's':
					if (document.getElementById('letter-' + event.key.toUpperCase()) != null) {
						document.getElementById('letter-' + event.key.toUpperCase()).click();
					}
					break;
				case 't':
					if (document.getElementById('letter-' + event.key.toUpperCase()) != null) {
						document.getElementById('letter-' + event.key.toUpperCase()).click();
					}
					break;
				case 'u':
					if (document.getElementById('letter-' + event.key.toUpperCase()) != null) {
						document.getElementById('letter-' + event.key.toUpperCase()).click();
					}
					break;
				case 'v':
					if (document.getElementById('letter-' + event.key.toUpperCase()) != null) {
						document.getElementById('letter-' + event.key.toUpperCase()).click();
					}
					break;
				case 'w':
					if (document.getElementById('letter-' + event.key.toUpperCase()) != null) {
						document.getElementById('letter-' + event.key.toUpperCase()).click();
					}
					break;
				case 'x':
					if (document.getElementById('letter-' + event.key.toUpperCase()) != null) {
						document.getElementById('letter-' + event.key.toUpperCase()).click();
					}
					break;
				case 'y':
					if (document.getElementById('letter-' + event.key.toUpperCase()) != null) {
						document.getElementById('letter-' + event.key.toUpperCase()).click();
					}
					break;
				case 'z':
					if (document.getElementById('letter-' + event.key.toUpperCase()) != null) {
						document.getElementById('letter-' + event.key.toUpperCase()).click();
					}
					break;
				default:
					break;
			}
		}
	});
}

function removeChildren(item) {
	for (var i = 0; i < item.childElementCount; i++) {
		if (item.hasChildNodes()) {
			item.removeChild(item.childNodes[i]);
		}
	}
}

function updateText() {
	document.getElementById("guessed-letters").innerHTML = 'Guessed Letters: ' + guessedLetters;
	document.getElementById("wins").innerHTML = 'Wins: ' + wins;
	document.getElementById("losses").innerHTML = 'Losses: ' + losses;
	document.getElementById("guesses-remaining").innerHTML = 'Guesses Remaining: ' + guesses;
}

function reset() {
	image.src = "./assets/images/hangman-2.png";
	overGame = false;
	win = false;
	underscore = ' ';
	guesses = 7;
	word = '@';
	wordArray = [];
	guessArray = [];
	again = false;
	guessedLetters = '';

	updateText();

	for (var i = 0; i < 26; ++i) {
		if (document.getElementById('letter-' + letters[i]) != null) {

			document.getElementById('letter-' + letters[i]).remove();

		}
	}

	removeChildren(playLine);
	removeChildren(dropdownLine);
	removeChildren(letterButtons);

}

function generateText(array) {
	var hiddenDisplay = '';
	word = array[Math.floor(Math.random() * elements.length)];
	wordArray = word.split('');

	underscore = document.createElement('H3');

	for (var i = 0; i < word.length; ++i) {
		hiddenDisplay += '_ ';
		guessArray.push('_');
	}

	var content = document.createTextNode(hiddenDisplay);
	underscore.appendChild(content);
	underscore.id = 'hidden-word';

	playLine.appendChild(underscore);
}

function playGameButton() {
	reset();
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
				removeChildren(playLine);
				generateLetters();
				generateText(elements);
				break;
			case 'webdev':
				document.getElementById("status-text").innerHTML = "<h2>Wordset: Web Development</h2>";
				playButton.style.visibility = 'hidden';
				wordsetDropdown.style.visibility = 'hidden';
				removeChildren(playLine);
				generateLetters();
				generateText(webdev);
				break;
			case 'calculus':
				document.getElementById("status-text").innerHTML = "<h2>Wordset: Calculus</h2>";
				playButton.style.visibility = 'hidden';
				wordsetDropdown.style.visibility = 'hidden';
				removeChildren(playLine);
				generateLetters();
				generateText(calculus);
				break;
			default:
				alert("Please select a wordset to continue!");
				break;
		}

	} else {
		playAgain();
		again = true;
	}
}

function playAgain() {
	if (!again) {

		removeChildren(playLine);

		removeChildren(dropdownLine);

		playLine.appendChild(playButton);
		dropdownLine.appendChild(wordsetDropdown);
		wordsetDropdown.style.visibility = 'visible';

	} else {
		again = false;
		reset();
		startGame();
	}

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
		updateText();
		if (playGame === true) {

			if (wordArray.includes(letter)) {
				for (var i = 0; i < wordArray.length; ++i) {
					if (wordArray[i] == letter) {
						guessArray[i] = wordArray[i];
					}
				}

			} else {
				guesses -= 1;
			}
			guessedLetters += letter + ' ';
			document.getElementById('letter-' + letter).remove();
			updateGame();

		}
	}

	function updateGame() {
		updateText();
		removeChildren(playLine);
		playLine.appendChild(underscore);
		updateHiddenWord();

		setImage()
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

		if (overGame === true) {
			underscore.style.color = 'red';
			hiddenDisplay = '';
			for(var i = 0; i < word.length; ++i) {
				hiddenDisplay += word[i] + ' ';
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
			wins++;
			statusText.innerHTML = "<h2>You win!!</h2>";
		} else {
			losses++;
			statusText.innerHTML = "<h2>LOSER!</h2>";
			updateHiddenWord();
		}

		updateText();
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
