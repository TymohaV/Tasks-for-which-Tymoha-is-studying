
/*
Настав час попрацювати з масивами!

Напиши функцію createArray, яка приймає ціле число N і повертає масив, який містить усі цілі числа від 1 до N включно.

Зверни увагу: якщо N = 0, поверни порожній масив.
*/

// function createArray(N) {
//     let numbers = [];
//     for (let i = 1; i <= N; i++) {

//       numbers.push(i);
//     }
//     return numbers
//   }
//    let result = createArray([10]);
//    console.log(result)


/**
 * 
 Настав час запускати масове виробництво роботів!

Щоб роботи на лінії збиралися правильно, потрібно маркувати деталі. 
Різні частини робота будуть складатися з різної кількості деталей. Тож зробимо наліпки для них!

Напиши функцію makeStickers, яка приймає число detailsCount і рядок robotPart. 
Функція повинна повертати масив рядків у наступному форматі: {{robotPart}} detail #{{n}} (наприклад, Hand detail #1).

Зверни увагу: якщо detailsCount = 0, поверни порожній масив.
 */
// function makeStickers(detailsCount, robotPart) {
//     let newArr = [];

//     for(let i = 1; i <= detailsCount; i++){

//      newArr.push(`${robotPart} detail #${i}`)
//     }
//    return newArr
//    }

//    let result = makeStickers(5, 'Tymoha');
//    console.log(result)


/*
Напиши функцію doublePower, яка приймає масив потужностей currentPowers та повертає новий масив із подвоєними значеннями.

Підказка
Якщо currentPowers порожній, відразу поверни порожній масив.
Інакше створи порожній масив для результатів.
Щоб перебрати вхідний масив, використай цикл for від 0 до currentPowers.length (не включно).
На кожній ітерації додавай у масив i-й елемент із currentPowers, помножений на 2.
Щоб отримати i-й елемент масиву, використай квадратні дужки (наприклад, currentPowers[i]).
*/

//    function doublePower(currentPowers) {
//     let newArr = [];
//     if(currentPowers === 0){
//       return newArr
//     }
//     for(let i = 0; i < currentPowers.length; i ++){
//       newArr.push(currentPowers[i] * 2);
//     }
//     return newArr
//   }


// function isSorted(boxNumbers) {

//   let prev = 0;
//   let curr = 0;

//   for (let i = 1; i < boxNumbers.length; i++) {

//     curr = boxNumbers[i]
//     if (curr < prev) {
//       return false
//     } else if (curr >= prev) {
//       prev = curr
//     }
//     return true
//   }
// }
// let result = isSorted([1, 2, 3, 4, 5, 6, 6]);
// console.log(result)


/**Ускладнюємо роботу нашого робота! Тепер він вміє перетворювати команди руху на правильний сигнал і рухатися відповідно до нього:

'forward' означає y + 1 (крок уперед);
'back' означає y - 1 (крок назад);
'right' означає x + 1 (крок праворуч);
'left' означає x - 1 (крок ліворуч).
Але було б чудово, щоб робот знав, де він знаходиться навіть без GPS.

Для цього реалізуй функцію getLocation, яка приймає 2 параметри:

масив початкових координат coordinates у вигляді [x, y];
масив із командами commands у вигляді ['command1', 'command2', 'command3' ...].
Функція повинна повертати масив кінцевих координат [x, y] після рухів згідно команд із масиву commands.

Наприклад, ми маємо масив із координатами coordinates = [2, 1] та масив із командами commands = ['left', 'back', 'back']:

координати після першої команди — [1, 1] (1 крок ліворуч);
координати після другої команди — [1, 0] (1 крок назад);
координати після третьої команди — [1, -1] (1 крок назад);
результатом буде масив [1, -1].
 */
/** 
function getLocation(coordinates, commands) {
  let x = coordinates[0];
  let y = coordinates[1];

    

    for (let i = 0; i < commands.length; i++) {

      let currentComand = commands[i];
      if (currentComand === 'forward') {
        y = y + 1;
      }else if(currentComand === 'back'){
        y = y - 1;
      }else if(currentComand === 'right'){
        x = x + 1;
      }else if(currentComand === 'left'){
        x = x - 1;
      }

    }
    let newArray = [x, y];
    return newArray
  }

let resGetLoc = getLocation([2, 1], ['forward', 'left', 'right', 'back'])
console.log(resGetLoc)
*/
/**  
 * Функція має повертати масив із цілями на кожен місяць (скільки роботів треба виробити щоб дотримуватись запланованого зростання).

Щоб краще зрозуміти, як це працює, розглянемо приклад. Припустимо, нам дано startProduction = 200, numberOfMonths = 3 та percent = 50:

план на перший місяць — 200 + 50% = 300 роботів;
на другий місяць це вже 300 + 50% = 450 роботів;
і нарешті на третій місяць це 450 + 50% = 675 роботів.
В результаті маємо отримати масив [300, 450, 675].

Зверни увагу: ціль на наступний місяць потрібно рахувати на основі попереднього місяця.

Якщо число роботів виявиться дробовим, округли його за допомогою Math.floor.
 * 
*/
// function getPlan(startProduction, numberOfMonths, percent) {

//   const goals = [];
//   let target = startProduction  

//   for (let i = 1; i <= numberOfMonths; i++) {
//      target += Math.floor(target * percent / 100) 
//     goals.push(target)

//   }
//   return goals
// }

// let resPlan = getPlan(10, 4, 30)
// console.log(resPlan);




