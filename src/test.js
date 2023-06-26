var numbers = [3, 56, 2, 48, 5];

////Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

var newNumbers=numbers.map(x=>x*2);
console.log('newNumbers',newNumbers);


//////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });

const filterNumbers=numbers.filter(x=>x>10);
console.log("filter",filterNumbers);



//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })

const reduceNumbers=numbers.reduce((x,y)=>x+y);
console.log("reduce",reduceNumbers);

////Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })

const findNumbers=numbers.find(x=>x>10);
console.log("find",findNumbers);


////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })

const findIndex=numbers.findIndex(x=>x>10);
console.log("findIndex",findIndex);
