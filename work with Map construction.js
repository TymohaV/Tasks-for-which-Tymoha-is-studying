// let numbersArray = [12, 34, 34, 54, 66, 3, 9, 0, 72, 3, 4, 5, 5];
// let resultMap = new Map();

// for (i = 0; i < numbersArray.length; i++){
//     let currentNum = numbersArray[i];
//     if (!resultMap.has(currentNum)) {
//         resultMap.set(currentNum, 1)
//     } else {
//         let previousCount = resultMap.get(currentNum);
//         resultMap.set(currentNum, previousCount + 1); 
//     }
// }
// console.log(resultMap);

let numbersArray = [12, 34, 34, 54, 66, 3, 9, 9, 9, 9, 9, 9, 9 ,9 , 0, 72, 3, 4, 5, 5];
let resultMap = new Map();

for (i = 0; i < numbersArray.length; i++) {
    let currentNum = numbersArray[i];
    let convertToStr = currentNum + '';


    for (j = 0; j < convertToStr.length; j++){
        let currentItem = convertToStr[j];
        if (!resultMap.has(currentItem)) {
            resultMap.set(currentItem, 1)
        } else {
            let previousCount = resultMap.get(currentItem);
            resultMap.set(currentItem, previousCount + 1);
        }
    }    
    
}


console.log(resultMap);
