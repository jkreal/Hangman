var wordsetSelection = 'default';

var wordsetDropdown = document.getElementById("wordset-dropdown");
var wordset1 = document.getElementById("wordset-1");
var wordset2 = document.getElementById("wordset-2");
var wordset3 = document.getElementById("wordset-3");

var vowels = document.getElementById("vowels");
var consonants = document.getElementById("consonants");

var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'w', 'X', 'Y', 'Z',];

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

	generateLetters();
	
}

function generateLetters() {
	for (var i = 0; i < 27; i++) {

		if (letters[i] == "A" || letters[i] == "E" || letters[i] == "I" || letters[i] == "O" || letters[i] == "U") {
			var letter = document.createElement("BUTTON");
			var content = document.createTextNode(letters[i]);

			letter.className = 'button btn-default';
			letter.setAttribute('type', "button");
			letter.id = 'letter-' + letters[i];
			letter.appendChild(content);

			vowels.appendChild(letter);
			console.log(letter.id);
		}


	}

	for (var i = 0; i < 26; i++) {
		if (letters[i] != "A" && letters[i] != "E" && letters[i] != "I" && letters[i] != "O" && letters[i] != "U") {
			var letter = document.createElement("BUTTON");
			var content = document.createTextNode(letters[i]);

			letter.className = 'button btn-default';
			letter.id = 'letter-' + letters[i];
			letter.appendChild(content);

			consonants.appendChild(letter);
			console.log(letter.id);
		}



	}
}
