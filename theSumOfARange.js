//Write a range function that takes two arguments, 
//start and end, and returns an array containing all the numbers 
//from start up to(and including) end.

function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}
console.log(range(1, 5))




//Next, write a sum function that takes an array of numbers 
//and returns the sum of these numbers.Run the example program 
//and see whether it does indeed return 55.

function sum() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(sum(1,2,3,4,5,6,7,8,9,10))

//As a bonus assignment, modify your range function to take 
//an optional third argument that indicates the “step” value 
//used when building the array.If no step is given, the elements 
//go up by increments of one, corresponding to the old behavior.
//The function call range(1, 10, 2) should return [1, 3, 5, 7, 9].
//Make sure it also works with negative step values so that range(5, 2, -1) produces[5, 4, 3, 2].