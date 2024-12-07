"use strict";
// Basic syntax of for of loop
// for (variable of array) {
//     statement
// }
Object.defineProperty(exports, "__esModule", { value: true });
// loop on an array
const myClothes = ['t-shirt', 'sweater', 'shoes', 'sunglasses', 'coat', 'pants', 'belt'];
for (const item of myClothes) {
    console.log(item);
}
console.log('-------------------');
// loop on string
for (const alphabet of 'hello') {
    console.log(alphabet);
}
