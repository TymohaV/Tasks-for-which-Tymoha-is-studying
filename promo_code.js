

let promoCode = 31364452;

function promoCodeFunc(promoCode) {
    let resultArray = [];
    while (promoCode > 0) {
        let num = promoCode % 10;
        resultArray.push(num);
        promoCode = (promoCode - num) / 10;
    } return resultArray; 


}
;
console.log(promoCodeFunc(promoCode));




// let promoCode = 12779057;
// let resultArray = [];

// while (promoCode) {
//     resultArray.push(promoCode % 10);
//     promoCode = Math.floor(promoCode / 10);
// }

// console.log(resultArray.reverse().join(','));


