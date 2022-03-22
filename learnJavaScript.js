// Objects---------------------->
// let user = {
//     name: 'John',
//     surname: 'Smith',
// };
// let changeName = user.name = 'Pete';
// let deleteName = delete user.name;

// console.log(user);


// Проверка на пустоту----------->

// function isEmpty(obj) {
//     for (key in obj) {
//         return true
//     }
//     return false
// };
// let schedule = {};


// console.log(isEmpty(schedule));
// schedule['8:30'] = 'get up';
// console.log(isEmpty(schedule));

// Объекты-константы?-------------------->

// const user = {
//     name: 'John'
// };
// user.name = 'Pete'
// console.log(user);


// Сумма свойств объекта------------------>

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };
// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];
// }
// console.log(sum);

//  Умножаем все числовые свойства на 2 --------------->

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == 'number') {
//             obj[key] *= 2;
//         }
//     }

// };
// multiplyNumeric(menu);
// console.log(menu);

// let user = {
//     name: 'Ivan',
//     sizes: {
//         height: 180,
//         width: 50,
//     }
// };
// let clone = Object.assign({}, user);
// console.log(user.sizes === clone.sizes);

// user.sizes.width++;
// console.log(clone.sizes.width);

// Смена тру на фолс и наоборот ------>
// let ChangeBooleanType = {
//     width: true,
//     height: false,
//     title: "String",
//     number: 123456
// };

function changeType(obj) {
    
        for (let key in obj) {
            if (typeof obj[key] == 'boolean') {
                obj[key] = !obj[key];
            }
    };
   
};
changeType(ChangeBooleanType);
console.log(ChangeBooleanType);


