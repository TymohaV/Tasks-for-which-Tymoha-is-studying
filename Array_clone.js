// let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковь'];
// function arrayClone(arr) {
    
// };

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert(styles.shift());
styles.unshift("Рэп", "Регги");