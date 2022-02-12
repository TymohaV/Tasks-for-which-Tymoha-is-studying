// console.log('Просто в программе');
// console.log(this);


// function abc() {
//     console.log('Внутри функции');
//     console.log(this);
//     console.log(3 + 5 / 2);
//     this.style.background = 'yellow';
// };

// abc();

// document.querySelector('button').onclick = abc;

// let button = document.querySelectorAll('button');
// button.forEach(function (element) {
//     element.onclick = abc;
// });


// document.querySelector('button').addEventListener('click', abc);

// let button = document.querySelectorAll('button');
// button.forEach(function (element) {
//     element.addEventListener('click', abc);
// });

// Проверка синтаксиса ========================>
// let user = {
//     name: 'John',
//     go: function () {
//         console.log(this.name);
//     }
// };
// (user.go)();


// Объясните значение "this"========================>

// let obj, method;

// obj = {
//     go:function() {
//     console.log(this);
//     }
// };

// obj.go();

// (obj.go)();

// (method = obj.go)();

// (obj.go || obj.stop)();


// Использование "this" в литерале объекта =======================>
// НЕ ВЕРНО!!!
// function makeUser() {
//     return {
//         name: "Джон",
//         ref: this
//     };
// };

// let user = makeUser();

// console.log(user.ref.name);
// ВЕРНО=======================>

// function makeUser() {
//     return {
//         name: "Джон",
//         ref() {
//             return this;
//         }
//     };
// };

// let user = makeUser();

// console.log(user.ref().name);

// Создайте калькулятор===========>

// let calculator = {
//     sum() {
//         return this.a + this.b;
//     },
//     mul() {
//         return this.a * this.b;
//     },
//     read() {
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b?', 0);
//     }
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// Цепь вызовов=================>
// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },

//     showStep: function () {
//         console.log(this.step);
//         return this;
//     }

// };
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();
// ladder.up()
//     .up()
//     .up()
//     .up()
//     .up()
//     .up()
//     .up()
//     .down()
//     .showStep();




// Создание калькулятора при помощи конструктора================>
// let Calculator = function () {

//     this.read = function () {
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b?', 0);
//     };
//     this.sum = function () {
//         return this.a + this.b;
//     };
//     this.mul = function () {
//         return this.a * this.b;
//     };
// };
// let calculator = new Calculator();
// calculator.read();

// alert("sum =" +  calculator.sum());
// alert("mul = " + calculator.mul());2








// Наследование прототипов================>
// let person = {
//     getName: function () {
//         return " The name is " + this.firstname + " " + this.lastName;
//     },
//     getInitials: function () {
//         if (this.firstname && this.lastName) {
//             return this.firstname[0] + " " +  this.lastName[0];
//         }
//     }
// };

// let funnyGuy = Object.create(person);
// funnyGuy.firstname = "Conan";
// funnyGuy.lastName = "O'Brien";

// let theDude = Object.create(person);
// funnyGuy.firstname = "Jeffrey";
// funnyGuy.lastName = "Lebowski";

// let detective = Object.create(person);
// funnyGuy.firstname = "Adrian";
// funnyGuy.lastName = "Monk";



// console.log(funnyGuy.getInitials());





// Создаём Accumulator======================>

// let Accumulator = function (startingValue) { 

//     this.value = startingValue;
//     this.read = function () {
//        this.a = +prompt('Добавить', 0);
//         this.value += this.a;
        
//     }
// };
// let accumulator = new Accumulator(1);

// accumulator.read();
// accumulator.read();

// alert(accumulator.value);

