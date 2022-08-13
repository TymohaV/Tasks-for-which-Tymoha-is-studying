function removeZeros(number) {
    let numToStr = number + '';

    let result = numToStr.replace('0', '');
    let toNum = Number(result);
    return toNum
}

let output = removeZeros(066);
console.log(output)



