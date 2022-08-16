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

//     for(let i = 1; i < strings.length; i++){
//         if(strings[i].length > maxLength.length){
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



/**Допиши функцію getPersistence, яка приймає невід'ємне число number, та повертає його мультиплікативну стійкість. 
 * Для цього потрібно перемножати всі цифри числа між собою, повторюючи цю операцію з добутком множення, 
 * доки результат не буде містити тільки одну цифру. 
 * Функція повинна повернути кількість операцій, які для цього знадобились. 

function getPersistence(number) {
    let steps = 0;

    while (number > 10) {
        let mul = 1;
        number = ("" + number).split("");
        for (let digit of number) {
            mul *= digit;
        }
        number = mul;
        steps++;
    }

    return steps;
}


let result = getPersistence(5632)
console.log(result)
*/