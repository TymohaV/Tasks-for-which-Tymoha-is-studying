// Допиши функцію getLargestNumber так, щоб вона повертала найбільше число з масиву numbers. 
//  Числа у масиві можуть бути дробовими, цілими, додатніми та від'ємними.

// Приклад:

// getLargestNumber([3, 8, 5, 7]) === 8
// getLargestNumber([-4, -9, -3, 0, -6]) === 0
// getLargestNumber([7, 7, 7, 7.1]) === 7.1
// getLargestNumber([0, 0, 0]) === 0
// getLargestNumber([3]) === 3
// getLargestNumber([-1.52, -1.57, -1.55, -1.56, -1.53
// ----------------------------------------------------------------------------------->

/**
 * Допиши функцію getLargestNumber так, щоб вона повертала найбільше число з масиву numbers. 
 * Числа у масиві можуть бути дробовими, цілими, додатніми та від'ємними.
 */
// function getLargestNumber(numbers) {
//     return Math.max.apply(null, numbers);
// }


//    ----------------------------------------------------------------------------------->
/**
 * Напиши функцію getLongestString, яка повертає найдовший рядок з масиву strings. 
 * Якщо два рядка мають однакову довжину - поверни перший з них.
 */
// function getLongestString(strings) {
//     let maxLength = strings[0];

//     for (let i = 1; i < strings.length; i++) {
//         if (strings[i].length > maxLength.length) {
//             maxLength = strings[i];
//         }

//     }
//     return maxLength
// }


// let longest = getLongestString(['One', 'two', 'three','qwert', 'Mate Academy','four'])
// console.log(longest);
// ----------------------------------------------------------------------------------------------------------------->



/**
 * Дано масив years, який містить роки життя різних людей у вигляді рядків в форматі 1714-1748 (рік народження - рік смерті).
Допиши функцию getAverageAge так, щоб вона повертала среднюю тривалість життя всіх людей, 
округлену до найближчого цілого (Math.round)
 */


// function getAverageAge(years) {
//     if (years.length === 0) return 0;

//     const yearsSum = years.reduce(
//       (sum, life) => {
//         const [birth, death] = life.split('-').map(str => Number(str));
//         return sum + (death - birth);
//       },
//       0,
//     );
//     return Math.round(yearsSum / years.length);
//   }

//   let resAge = getAverageAge([
//     '1907-1997',
//     '1761-1833',
//     '1535-1582',
//     '1918-2012',
//     '1877-1968',
//     '1696-1724',
//     '1602-1642',
//     '1692-1743',
//     '1695-1762',
//     '1570-1636',
//     '1762-1807',
//     '1668-1731',
//   ]);
//   console.log(resAge)
// --------------------------------------------------------------------------------->



/**
 * Допиши функцію removeLetter, яка приймає рядок word та букву letter і повертає рядок без вказаної букви.
 */
// function removeLetter(word, letter) {
//     let result = '';
//     let letterRemove = letter

//     for(let letter of word){
//       if(!letterRemove.includes(letter)){
//         result += letter
//       }
//       console.log(result)
//     }
//     return result
//   }
//   let resRemove = removeLetter('Abracadabra', 'a');

// -------------------------------------------------------------------------------------------------->



/**
 * Напиши функцію getDifferences, яка приймає два масиви чисел, 
 * та повертає масив чисел, які є лише в одному з масивів, але не в обох.
в кожному з вхідних масивів числа не повторюються
порядок елементів має зберегтися: елементи першого, потім другого
 */


// function getDifferences(a, b) {
//     let temp = [];
//     let diff = [];

//     for(let i = 0; i < a.length; i ++){
//         temp[a[i]] = true;
//     }
//     for(let i = 0; i < b.length; i ++){
//         if(temp[b[i]]){
//             delete temp[b[i]];
//         }else{
//             temp[b[i]] = true
//         }
//     }
//     for(let k in temp){
//         diff.push(Number(k))
//     }
//     return diff
// }

// let resgetDiff = getDifferences([1, 2, 3, 4],[2, 3, 5, 6])
// console.log(resgetDiff)

// function getDifferences(a, b) {

//     return a.filter(x => !b.includes(x)).concat(b.filter(x => !a.includes(x)));
//   }

// console.log(getDifferences([1, 2, 3, 4],[2, 3, 5, 6]));
// ------------------------------------------------------------------------------------------->


/*
Допиши функцію getPersistence, яка приймає невід'ємне число number, та повертає його мультиплікативну стійкість. 
 * Для цього потрібно перемножати всі цифри числа між собою, повторюючи цю операцію з добутком множення, 
 * доки результат не буде містити тільки одну цифру. 
 * Функція повинна повернути кількість операцій, які для цього знадобились. 
*/


// function getPersistence(number) {
//     let steps = 0;

//     while (number > 10) {
//         let mul = 1;
//         number = ("" + number).split("");
//         for (let digit of number) {
//             mul *= digit;
//         }
//         number = mul;
//         steps++;
//     }

//     return steps;
// }


// let result = getPersistence(5632)
// console.log(result)



/*
Створи функцію isSpecialNumber, яка приймає додатне число n і визначає, чи є воно особливим.

Число називається особливим, якщо кожна його цифра не більша ніж 5 (0, 1, 2, 3, 4 або 5).

Функція повинна повернути рядок 'Special!!', якщо число особливе, та 'NOT!!' — якщо ні.

Наприклад:

isSpecialNumber(2); // 'Special!!'
// 2 — знаходиться в інтервалі від 0 до 5

isSpecialNumber(9); // 'NOT!!'
// 9 > 5

isSpecialNumber(23); // 'Special!!'
// всі цифри числа 23 знаходяться в інтервалі від 0 до 5

isSpecialNumber(38); // 'NOT!!'
// 8 > 5
*/
// function isSpecialNumber(n) {
//     const numbreToStr = n + '';
//     const splitStr = numbreToStr.split('');

//     for (let i = 0; i < splitStr.length; i++) {
//         let curr = splitStr[i];
//         let currTonum = Number(curr);

//         if (currTonum > 5) {
//             return 'NOT!!'
//         }
//     }
//     return "Special!!"
// }



// const resultNumber = isSpecialNumber(54)
// console.log(resultNumber);

/*
А тепер перевіримо, чи всі наші числа охайні. Число вважається охайним, якщо кожна його цифра не менша за попередню.

Реалізуй функцію isTidy, яка приймає додатне число та повертає true, якщо воно охайне, інакше — false.

Наприклад:

isTidy (12); // true
// цифри розташовані за зростанням

isTidy (32); // false
// цифри розташовані за спаданням

isTidy (1024); // false
// 1 > 0

isTidy(3445); // true
// однакові цифри можуть бути поруч

isTidy (13579); // true
// цифри розташовані за зростанням

*/

// function isTidy(number) {

//     let numToStr = String(number);
//     let prevNum = numToStr[0]
//     for (let i = 1; i < numToStr.length; i++) {

//         let current = numToStr[i];
//         current = Number(current)

//         if (current <= prevNum) {
//             prevNum = current
//         } else {
//             return false
//         }
//     }
// return true
// }

// let resulIsTidy = isTidy(1234)
// console.log(resulIsTidy)

/*
Реалізуй функцію isJumping, яка приймає число та повертає рядок 'JUMPING', 
якщо кожна цифра в числі відрізняється від сусідньої на 1, а якщо ні — рядок 'NOT JUMPING'.

Зверни увагу:

вхідне число завжди додатне;
різниця між 9 і 0 не дорівнює 1;
якщо поруч стоять однакові цифри, то число 'NOT JUMPING';
якщо число складається з однієї цифри — воно 'JUMPING'.
Наприклад:

// число з однієї цифри
isJumping(9); // 'JUMPING'

// 7 і 9 відрізняються на 2, а не на 1
isJumping(79); // 'NOT JUMPING'

// усі сусідні цифри відрізняються на 1
isJumping(23454); // 'JUMPING'
*/

function isJumping(number) {
    let previusNum = number % 10
    number = Math.floor(number / 10) 
    while (number){
      current = number % 10
      number = Math.floor(number / 10) 
      if (Math.abs(current - previusNum) !== 1){
        return 'NOT JUMPING'
      }
      previusNum = current
    } 
    return 'JUMPING'
  }
  
  console.log(isJumping(13))    // NOT JUMPING
  console.log(isJumping(123))   // JUMPING
  console.log(isJumping(12321)) // JUMPING
  console.log(isJumping(1235))


  function isJumping(number) {
    let toStr = String(number);
    let previusNum = toStr[0];
    let current;
    for (let i = 1; i < toStr.length; i++) {
      current = Number(toStr[i]);
      let count = Math.abs(current - previusNum);
      // count может быть только положительным
      // выход только если не 1
      if(count !== 1){ 
        return 'NOT JUMPING'
      }
      previusNum = current // переносим в previusNum
    }
    return 'JUMPING'
  }


















