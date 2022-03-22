// const array = [2, 4, 6, 8, 5, 9, 88];

// const countArray = array.reduce(function (previousValue, currentValue, index, array) {
//     return previousValue + currentValue;


// });

// console.log(countArray);


// const array1 = [1, 2, 3];


// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//     (previousValue, currentValue) => previousValue + currentValue,
//     initialValue
// );

// console.log(sumWithInitial);



const users = [
    {
        name: "Oleg Petko",
        location: "Odesa",
        orders: [
            {
                item_name: "tomato",
                price: 10,
                quantity: 23
            },
            {
                item_name: "potato",
                price: 5,
                quantity: 6
            },
        ]
    },
    {
        name: "Vlad Diachenko",
        location: "Odesa",
        orders: [
            {
                item_name: "cigarets",
                price: 65,
                quantity: 10
            },
            {
                item_name: "potato",
                price: 5,
                quantity: 1
            },
        ]
    },
    {
        name: "Sergey Diachenko",
        location: "Oleshki",
        orders: [
            {
                item_name: "cigarets",
                price: 56,
                quantity: 5
            },
            {
                item_name: "tomato",
                price: 25,
                quantity: 11
            },
        ]
    },
    {
        name: "Roman Makarenko",
        location: "Oleshki",
        orders: [
            {
                item_name: "cigarets",
                price: 76,
                quantity: 2
            },
            {
                item_name: "condoms",
                price: 120,
                quantity: 2
            },
        ]
    },
    {
        name: "Vlad Timoshenko",
        location: "Oleshki",
        orders: [
            {
                item_name: "tomato",
                price: 34,
                quantity: 2
            },
            {
                item_name: "powder",
                price: 56,
                quantity: 4
            },
        ]
    }
]

// const arrOfOrders = users.reduce((acc, item) => {
//     return [...acc, ...item.orders];
// }, []);

// console.log(arrOfOrders);

let arrOfOrders = [];
let Odessa = 0;
let Oleshky = 0;

for (let i = 0; i < users.length; i++) {
    let currUser = users[i]

    for (let j = 0; j < currUser.orders.length; j++) {
        let currOrd = currUser.orders[j];
        let CalculateItems = currOrd.price * currOrd.quantity;
        
        if (currUser.location == 'Odesa') {

            Odessa += CalculateItems;

        } else if (currUser.location == 'Oleshki') {

            Oleshky += CalculateItems;
        }
    }
}
console.log('Odesa' + '-', Odessa)
console.log('Oleshky' + '-', Oleshky)
// Добавлю что то для комита












