let words = ['Hello', 'Vladyslav', 'Tymoshebko','Where', 'do', 'you', 'Want', 'to', 'go', 'today?'];
let pharse = words.reduce(function (total, current, index) {
    if (index == 0) {
        return current;
    } else {
       return total + " " + current;
   }
}, "");
console.log(pharse);

let wordsOutsideMethod = ['Hello', 'Vladyslav', 'Tymoshebko', 'Where', 'do', 'you', 'Want', 'to', 'go', 'today'];



function createSentence(words) {
    let resultString = "";

    for (i = 0; i < words.length; i++) {
        let currentElement = words[i];
        resultString += currentElement;
        if (i < words.length - 1) {
            resultString = resultString + " ";    
        }
    }
    resultString += ".";

    console.log(resultString);
}



createSentence(wordsOutsideMethod);