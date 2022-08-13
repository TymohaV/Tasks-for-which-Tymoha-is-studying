// function removeZeros(number) {
//   if(number === 0){
//     return number
//   }

//   let numToStr = number + "";

//   let result = numToStr.replace(/0/gi, '');

//   let toNum = Number(result);
//   return toNum
// }

// let output = removeZeros(-340506);
// console.log(output)



/* 
function checkSubstring(text, part) {
 let string = text.toLowerCase();
 let substring = part.toLowerCase();

 if (string.includes(substring)) {
  return true;
}
return false;

}
let result = checkSubstring('@#$%^*(!)()({}[]', part='?');
console.log(result);
*/

// function getCapitals(string) {
// let newArray = [];


// for(i = 0; i < string.length; i++ ){
//   let currentElem = string[i];

//   if(currentElem.charCodeAt(0) >= 65 && currentElem.charCodeAt(0) <= 90){
//     newArray.push(currentElem);
//   }
// }
// return newArray;

// }
// let res = getCapitals(': I Am Learning JavaScript')
// console.log(res);


// function removeVowelKeys(keys) {
//   let newArray = [];
//   let vowels = "aeiouy";

//   for(let i = 0; i < keys.length; i++){
//     let currentElement = keys[i];
//     let changeRegister = currentElement.toLowerCase();
//     let firstWord = changeRegister[0]
//     if(!vowels.includes(firstWord)){
//       newArray.push(keys[i]);
//     }
//     return newArray
//   }


// let result = removeVowelKeys(['alarm', 'chip', 'isValid', 'Advice', 'onClick']);
// console.log(result);


// function getSumOfRange(start, end) {
//   if(end === start) return start;
//   if(end === start + 1) return start + end;
//   return start + end + getSumOfRange(start + 1, end - 1);
// }
// let result = getSumOfRange(1, 100)
// console.log(result)


// function sumArray(array) {
//   let min = 0;
//   let max = 0;

//   for(i = 0; i < array.length; i++){
//       let currentItem = array[i];
//     if(currentItem <= 1){
//       min = currentItem
//     }
//   }
//   return min
// }
// let result = sumArray([[ 6, 2, 1, 8, 10 ]]);
// console.log(result);




// Створіть функцію repeat(str, count), яка повертає рядок, де str повторюється count разів.

// function repeat(str, count) {
//   return str.repeat(count);

// }
//  -------------------------------------------------------------------------------------------

/*Створи функцію makeNegative, яка приймає число num і повертає його від'ємну версію.

Примітки:

якщо num вже від'ємне, поверни num, не змінюючи його;
якщо num = 0 поверни його.


function makeNegative(num) {
  if(num < 0){
      return num
  }else{
      return num * -1;
  }
}
*/
/* 
Є рядок, що складається лише з цифр '12320345'. 
Чи є він паліндромом: перша цифра така, як остання, друга, 
як передостання і так далі...


function isPalindrome(str) {
  
  for (let i = 0; j = str.length -1; i < j) {
           if(str[i] != str[j])
             return false;
      }
      return true
  }
*/

/*
Реалізуй функцію countMs, яка приймає рядок text та повертає кількість літер m у ньому (як великих, так і маленьких).

*/
// function countMs(text) {
//   let count = 0;
//   for(let letter  of text){  
//     if(letter == 'M' || letter == 'm')

//       count ++
//   }
//   return count
// }
//  let result = countMs('Mama');
//  console.log(result);


/*
Напиши функцію removeVowels, яка приймає рядок doc і повертає новий рядок, де всі голосні видалені.

Зверни увагу: голосними літерами є aeiouy у будь-якому регістрі.
*/
// function removeVowels(doc) {
//   let result = '';
//   let vowels = 'aeiouyAEIOUY'
//   for(let letter of doc){

//       if(!vowels.includes(letter)){

//         result += letter
//       }
//    }
//    return result

// }
// let resFunc = removeVowels('Abracadabra')
// console.log(resFunc)


/*
У цьому завданні створи функцію makeAbbr, яка приймає рядок зі слів words та повертає абревіатуру з них у верхньому регістрі.

Рядок words містить одне або декілька слів, розділених одним пробілом.
*/

// function makeAbbr(words) {
//   let abbreviation = words[0];

//   for (let i = 0; i < words.length; i++) {
//     if (words[i] === ' ') {
//        abbreviation += words[i + 1];
//     }
//   }
//   return abbreviation.toUpperCase()
// }

// let resultAbbr = makeAbbr('Vladyslav Tymoshenko, Vika Pask')
// console.log(resultAbbr)

/*
Створи функцію decryptMessage, яка приймає рядок 
message та повертає новий рядок, де символи з message розташовані у зворотному порядку.
*/

// function decryptMessage(message) {
//   let result = '';

//   for(let i = message.length -1; i >=0; i --){
//     result += message[i];
//   }
//   return result
// }

/*
Створи функцію isWerewolf, яка приймає рядок target і повертає true, якщо це перевертень, або false — якщо ні.

Перевертень — це слово або речення, яке читається однаково в обох напрямках 
(зліва направо й навпаки), при цьому ігноруючи регістр, пробіли та розділові знаки.

*/
// function isWerewolf(target) {
//   let direct = '';
//   let reverced = '';


//     let add = target.toLocaleLowerCase().replace(/[^a-zа-яё]/gi, '');

//     direct += add;
//     reverced += add;

//     let revTarget = reverced.split('').reverse().join('');

//     return direct === revTarget;
// }

// let resWerwolf = isWerewolf('AbbA,, !,!,!')
// console.log(resWerwolf);

// Solution 2 ----------------------------------------------------------
// function isWerewolf(target) {
// let toLowerTarget = target.toLowerCase();
// const abc = 'abcdefghijklmnopqstuvwxyz';
// let normal = '';
// let reversed = '';

// for(let char of toLowerTarget){
//   if(abc.includes(char)){
//     normal += char;
//     reversed = char + reversed;
//   }
// }
// return normal === reversed
// }
// let resWerwolf = isWerewolf('AbbA,, !,!,!')
// console.log(resWerwolf);



function getSuccessRate(statistic) {
  if (!statistic) {
    return 0;
  }
  let count = 0;

  for (let num of statistic) {
    if (num === '1') {
      count++;
    }

  }
  return Math.round((count / statistic.length) * 100)
}
let resSuccsessRate = getSuccessRate('11100');
console.log(resSuccsessRate);




