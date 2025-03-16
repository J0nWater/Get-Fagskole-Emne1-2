let space = ' ';
let noChar = '';

function analyzeText(text) {
    return 	{ 
		wordCount: getWordCount(text), // Antall ord i teksten, 
		letterCount: getLetterCount(text), // Antall vanlige bokstaver, 
		nonLetterCount: getNonLetterCount(text), // Antall tegn som ikke er bokstaver, 
		mostCommonLetter: getMostCommonLetter(text), // Hvilken bokstav som er mest brukt, 
		longestWord: getLongestWord(text) // Det lengste ordet
	 }
}

function isLetter(character) { 
    return character.toLowerCase() != character.toUpperCase(); 
}

function getWordCount(text) {
	let cleanedText = '';
	let wordsQuantity = 0;

	for(let char of text) {
		if(isLetter(char) || char === space) {
			cleanedText += char;
		}	
	}

	let allWords = cleanedText.split(space)

	for(let word of allWords) {
		if(word !== noChar) {
			wordsQuantity++;
		}
	}
	return wordsQuantity;
}

function getLetterCount(text) {
	let lettersQuantity = 0;

	for(let char of text) {
		if(isLetter(char)) {
			lettersQuantity++;
		}	
	}
	return lettersQuantity;
}

function getNonLetterCount(text) {
	let nonLettersQuantity = 0;

	for(let char of text) {
		if(!isLetter(char)) {
			nonLettersQuantity++;
		}	
	}
	return nonLettersQuantity;
}

function getMostCommonLetter(text) {
	let mostCommonLetter = '';
	let allLetters = [];
	let letters = [];
	let lettersCounts = [];

	for(let char of text) {
		if(isLetter(char) ) {
			allLetters.push(char);
		}	
	}
	
	for(let letter of allLetters) {
		if(letters.indexOf(letter) == -1) {
			letters.push(letter);
			lettersCounts.push(1);
		}
		else {
			lettersCounts[letters.indexOf(letter)] +=1;
		}
	}

	let lagestNumberOfLetter = Math.max(...lettersCounts)
	let indexOfLetter = 0;

	for(let leterCount of lettersCounts) {
		if(lagestNumberOfLetter === leterCount) {
			mostCommonLetter = letters[indexOfLetter];
		}
		else{
			indexOfLetter += 1;
		}
	}
	return mostCommonLetter
}

function getLongestWord(text) {
	let cleanedText = '';
	let lowerCaseText = '';
	
	for(let char of text) {
		if(isLetter(char) || char === space) {
			cleanedText += char;
		}	
	}

	lowerCaseText = cleanedText.toLowerCase()	
	let words = lowerCaseText.split(space)
	let longestWord = '';

	for(let word of words) {
		if(word.length > longestWord.length) {
			longestWord = word;
		}
	}
	return longestWord;
}