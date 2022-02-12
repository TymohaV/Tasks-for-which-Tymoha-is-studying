let bigWord = 'our-jet-super-man';
let words = bigWord.split('-');

let newArayWords = [];

for (i = 0; i < words.length; i++) {
    let currentWord = words[i];
    if (i > 0) {
        let firstLetter = currentWord[0];
        let restOfTheWord = currentWord.substring(1, currentWord.length);
        firstLetter = firstLetter.toUpperCase();
        currentWord = firstLetter + restOfTheWord;
    }


    newArayWords.push(currentWord);

};
return newArayWords.join('');
