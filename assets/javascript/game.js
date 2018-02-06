/*TODO:~~~~~~~~~~~
	Pass through method which wordset to use
	Click letter buttons
	Make letters appear over underscores
	Handle a win/loss*/

var guesses = -1;
var wordsetSelection = 'default';
var word = '@';
var wordArray = [''];

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

var playGame = false;

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

function generateText(array) {
	word = elements[Math.floor(Math.random() * elements.length)];
	wordArray = word.split('');
	console.log(word.length);

	for(var i = 0; i < word.length; i++){
		var underscore = document.createElement('H3');
		var content = document.createTextNode('_');

		underscore.appendChild(content);
		underscore.style.display= 'inline-block';
		underscore.style.fontFamily = 'Dhurjati';

		underscore.id = 'letter-' + i;

		if(i === 0){
			underscore.style.marginLeft = '0px';
		}
		else{
			underscore.style.marginLeft = '50px';
		}
		playLine.appendChild(underscore);
	}

	console.log(wordArray);
}

function playGameButton() {
	playGame = true;

	switch (wordsetSelection) {
		case 'default':
			alert("You must choose a wordset to continue!");
			break;
		case 'elements':
			document.getElementById("status-text").innerHTML = "<h2>Wordset: Chemistry Elements</h2>";
			playButton.style.visibility = 'hidden';
			wordsetDropdown.style.visibility = 'hidden';
			playLine.removeChild(playButton);
			generateLetters();
			generateText();
			break;
		case 'webdev':
			document.getElementById("status-text").innerHTML = "<h2>Wordset: Web Development</h2>";
			playButton.style.visibility = 'hidden';
			wordsetDropdown.style.visibility = 'hidden';
			generateLetters();
			break;
		case 'calculus':
			document.getElementById("status-text").innerHTML = "<h2>Wordset: Calculus</h2>";
			playButton.style.visibility = 'hidden';
			wordsetDropdown.style.visibility = 'hidden';
			generateLetters();
			break;
		default:
			alert("No wordset selected!");
			break;
	}
}

function generateLetters() {
	for (var i = 0; i < 26; i++) {

		var letter = document.createElement("BUTTON");
		var content = document.createTextNode(letters[i]);


		if (letters[i] == "A" || letters[i] == "E" || letters[i] == "I" || letters[i] == "O" || letters[i] == "U") {
			letter.className = 'button btn-info letter';
		} else {
			letter.className = 'button btn-default letter';
		}

		letter.setAttribute('type', "button");
		letter.id = 'letter-' + i;
		letter.appendChild(content);

		letter.style.position = 'relative';
		letter.style.marginLeft = '2px';

		letter.addEventListener("click", function(){

		});

		letterButtons.appendChild(letter);
	}

	function findLetters(){
	}
	
}
