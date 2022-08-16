let sentence = "Hello Vladyslav Tymoshebko Where do you Want to go today."
let resultArray = [];
let temp = '';
for (i = 0; i < sentence.length; i++){
    if (sentence[i] !== " ") {
        temp += sentence[i];
    }
    if (sentence[i] == " ") {
        resultArray.push(temp);
        temp = "";
    }
};
console.log(resultArray);


