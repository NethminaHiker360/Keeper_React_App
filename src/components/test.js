var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
var mapArray=numbers.map(function (num){
    return num*10;
});
console.log("Map Array : "+mapArray);

//Filter - Create a new array by keeping the items that return true.
var filterArray =numbers.filter(function(num){
    return num<10;
});
console.log("Filter Array : "+filterArray)

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.
