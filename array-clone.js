// let vegetables = ['Капуста', 'Морковка', 'Ридиска'];

// function arrayClone(arr) {
//         return arr.slice(0);


// };

let vegetables = ['Капуста', 'Морковка', 'Ридиска'];

function arrayClone(arr) {
        let cloneVeg = [];
        for (i = 0; i < arr.length; i++) {
                let currentVeg = arr[i];
                cloneVeg.push(currentVeg);
                
        }
        return cloneVeg;
};

let result = arrayClone(vegetables);
console.log(result);

