// let messages = [
//     { text: "Hello", from: "John" },
//     { text: "How goes?", from: "John" },
//     { text: "See you soon", from: "Alice" }
// ];

// let MessageRead = new WeakSet();

// MessageRead.add(messages[0]);
// MessageRead.add(messages[1]);

// readMessages.add(messages[0]);

// console.log("Read message 0: " + readMessages.has(messages[0]));

// messages.shift();
// const arr1 = ['u1', 'u2', 'u3'];
// const arr2 = [1, 2, 3];

// const arr3 = arr1.concat(arr2);
// console.log(arr3);

// function square(a) {
//     result = a ** 2;;
//     console.log('you square' + result);
// };
// square();
// let array = [12, 6, 22, 0, -8];

// function getModifiedArray(array) {
//     let newArray = array.slice();
    
//      return newArray[0] = "Start", newArray[-1] = "End"

    
// }
// getModifiedArray(newArray);
// console.log(newArray)




// let array = [12, 6, 22, 0, -8];

// function getModifiedArray(array) {
    
//     let newArray = array.slice();
//     newArray[0] = "Start";
//     newArray[newArray.length - 1] = "End";

//     return newArray;
// }

// console.log(getModifiedArray(array));

// ------------------------------------------>
let array = [12, 6, 22, 0, -8];
function getModifiedArray(array) {
    return ["Start", ...array.slice(1, -1), "End"];
}

const input = [12, 6, 22, 0, -8];
const output = getModifiedArray(input);

console.log(input);
console.log(output);
