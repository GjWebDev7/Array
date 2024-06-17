'use strict';
const birthYear = new Array(1998, 1999, 2000);
console.log(birthYear, typeof birthYear);

const friends = ['Andrew', 'Neo', 'Triumph', 'Tristan'];
console.log(friends, typeof friends);

// length : returns the number of elements in an array
console.log(friends);
console.log(friends.length);

// includes() : Check if an array contains the specified element
console.log(friends);
console.log(friends.includes('Neo'));

// indexOf() : Search the array for an element and returns its position
console.log(friends);
console.log(friends.indexOf('Tristan'));

// push() :	Adds new elements to the end of an array, and returns the new length
console.log(friends);
console.log(friends.push('Gaurav'));
console.log(friends);

// pop() :	Removes the last element of an array, and returns that element
console.log(friends);
console.log(friends.pop());
console.log(friends);

// unshift() : method adds new elements to the beginning of an array.
console.log(friends);
console.log(friends.unshift('Jaiswal'));
console.log(friends);

// shift() : method removes the first array element
console.log(friends);
console.log(friends.shift());
console.log(friends);

// at() : method returns an indexed element from an array
// at() : method returns the same as []
// Note : Array indexes start with 0.

console.log(friends);
console.log(friends.at(-1));
console.log(friends[0]);
console.log(friends[-1]); // undefined(it will not work)
console.log(friends[friends.length - 1]); // instead it will work

// Changing an Array Element
console.log(friends);
friends[1] = 'Gaurav';
console.log(friends);

const movments = [200, 450, -400, 3000, -650, -130, 70, 1300];

// slice() method slices out a piece of an array into a new array:
console.log(movments.slice(1));

// splice----------------freeCodeCamp.org
// splice() method adds and/or removes array elements.
// Array.splice(start, removeCount, newItem, newItem, newItem, ...)
const months = ['January', 'February', 'Monday', 'Tuesday'];
const days = months.splice(2, 2, 'March', 'April');
console.log(months);
console.log(days);

// reverse() method reverses the order of the elements in an array
console.log(movments.reverse());
console.log(movments.reverse());

// concat() method creates a new array by merging (concatenating) existing arrays:
const x = [1, 2, 3];
const y = [4, 5, 6];
const a = [7, 8, 9, 10];
const z = x.concat(y).concat(a);
console.log(z);

//join() method also joins all array elements into a string.
console.log(movments.join(','));

// at() method returns an indexed element from an array.
console.log(movments.at(2));
console.log(movments.at(-1));

// forEach() method calls a function (a callback function) once for each array element.
// Note that the function takes 3 arguments:
// The item value
// The item index
// The array itself
movments.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movements ${i + 1} : ${mov} deposited`);
  } else {
    console.log(`Movements ${i + 1} : ${Math.abs(mov)} withdrew`);
  }
});

// forEach with Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
console.log(currencies);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// forEach with Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, key, set) {
  console.log(`${key} : ${value}`);
});

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, set) {
//   console.log(`${value} : ${value}`);
// });

// MAP, FILTER AND REDUSE

// map() method returns a new array containing the results of applying an operation on all original arrray elements
const inrToUSD = 83;
const usd = movments.map(function (mov) {
  return Math.trunc(mov / inrToUSD);
});
console.log(usd);

// filter() it filters elements in the original array which satisfy a certain condition.
console.log(movments);
const deposits = movments.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(deposits);

// reduce() method runs a function on each array element to produce (reduce it to) a single value.
const balance = movments.reduce(function (acc, mov, i, arr) {
  return acc + mov;
}, 0);
console.log(balance);

// find() method is used to retrieve the first element in an array that satisfies a specified condition.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find(function (mov, i, arr) {
  return mov < 0;
});
console.log(firstWithdrawal);

// findIndex() method iterates over array elements, returning the index of the first element passing a test. If no match, returns -1.

const findInd = movements.findIndex(function (mov, i, arr) {
  return mov < 0;
});
console.log(findInd);

// Array.some() method
// The Array.some() method in JavaScript is used to check whether at least one of the elements of the array satisfies the given condition or not. and it accepts true/false boolean expressions, The only difference is that the some() method will return true if any predicate is true while every() method will return true if all predicates are true.

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);
// Array.every() method
const anyDeposit = movements.every(mov => mov > 0);
console.log(anyDeposit);

// flat and flatMap
// Used to flatten nested arrays up to a specified depth. The depth value is 1 by default and you can leave it empty.
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flattenedArray = nestedArray.flat();
console.log(flattenedArray); // Output: [1, 2, 3, 4, [5, 6]]

// Flattening to a Deeper Level
const nestedArray1 = [1, [2, 3], [4, [5, 6]]];
const fullyFlattenedArray = nestedArray.flat(2);
console.log(fullyFlattenedArray);

// Flattening Infinite Levels (All Levels)
const deeplyNestedArray = [1, [2, [3, [4, [5]]]]];
const fullyFlattenedArray1 = deeplyNestedArray.flat(Infinity);
console.log(fullyFlattenedArray); // Output: [1, 2, 3, 4, 5]

// flatMap: The flatMap() method uses a combination of the map() and flat() methods to perform operations. The flatMap() loops through the elements of an array and concatenates the elements into one level. flatMap() takes in a callback function which takes in the current element of the original array as a parameter.
const arr3 = [1, 2, [4, 5], 6, 7, [8]];
console.log(arr3.flatMap(element => element)); // output [1, 2, 4, 5, 6, 7, 8]

// Sometimes you'll have a situation where you have more than one depth of an array and you decide to change the new array into a one base level. Then you will have to use the flat() method immediately after the flatMap() method.
const arr4 = [1, 2, [3, [4, 5, [6, 7]]]];
console.log(arr4.flatMap(element => element).flat(2)); // output [1, 2, 3, 4, 5, 6, 7]

// Sorting

// return < 0  A, B(keep order)
// return > 0  B, A(switch order)

// movements.sort((a, b) => {
// if (a > b) return 1; // switch order
// if (a < b) return -1; // keep order
// });

console.log(movments);
movments.sort((a, b) => a - b); //ascending
console.log(movments);
movments.sort((a, b) => b - a);
console.log(movments); // descending

// Dates
// new Date() creates a date object with the current date and time:
const now = new Date();
console.log(now);
console.log(new Date('Dec 25, 2023'));

// Timers: setTimeout and setInterval
// setTimeout(): Executes a function, after waiting a specified number of milliseconds.
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza🍕 with ${ing1} and ${ing2}`),
  3000, // 3000 is the delay in milliseconds.
  ...ingredients // passing arguments(all the arguments here that we pass after the delay, will be arguments to the function.)
);
console.log('waiting...');

// If the function has not already been executed, you can stop the execution by calling the clearTimeout() method:
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval() method repeats a given function at every given time-interval.
const noww = setInterval(function () {
  const x = new Date();
  console.log(x);
}, 1000);
// clearInterval() method stops the executions of the function specified in the setInterval() method.
clearInterval(noww);
