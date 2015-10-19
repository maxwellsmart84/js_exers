

/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback



var numbers = [1, 2, 3, 4]

var mult = function() {
  var total = 1;
  for (var i=0; i < numbers.length; i++) {
    total *= numbers[i]
  }
  return;
};


// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });
// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
    total=0;
    args.forEach(element, index, array) {
    total += element;
  };
    return total;

};

console.assert( sum(1, 2, 3, 4, 5) === 15 )

// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
    args.forEach(element, index, array) {
      var total = 0;
      total += element;
      var avg = total/array.length;
      bre
    }
    return avg;
};

console.assert( average(2, 4, 6, 8) === 5 )

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var bigger = args[0]
    // .. do something with each element of args
    // YOUR CODE HERE
    args.forEach (element, index, array) {
      if (el > bigger) {
        bigger = el;
      }
      return bigger;
    };
};

console.assert( largest(2, 4, 6, 8) === 8 )

// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var length = 0
    // .. do something with each element of args
    // YOUR CODE HERE
    args.forEach(element, index, array) {
      if (element.length > length) {
        length = el;
      }
      return length;
    };
};

 console.assert( longest("this", "is", "a", "awesome", "function") === "function" );

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

// .sort()
var num = [5, 6, 9, 0, 1];
var sortnum = num.sort()
console.assert === 0 , 1, 5, 6, 9
// .concat()
var num = [5, 6, 9, 0, 1];
var nintendo = ["mario", "luigi", "toad", "yoshi", "peach"];
var numnintendo = num.concat(nintendo);
console.assert === [5, 6, 9, 0, 1, "mario", "luigi", "toad", "yoshi", "peach"]
// .indexOf()
var nintendo = ["mario", "lugi", "toad", "yoshi", "peach"];
var nindex = nintendo.indexOf(2);
console.assert === "toad";
// .split()
var nintendo = "mario luigi toad"
var nintendosplit = nintendo.split();
console.assert === ["mario", "luigi", "toad"]

// .join()
var nintendo = ["mario", "luigi", "toad", "yoshi", "peach"]
var ninjoin = nintendo.join();
console.assert === "mario, lugi, toad, yoshi, peach"

// .pop()
var nintendo = ["mario", "luigi", "toad", "yoshi", "peach"]
var ninpop = nintendo.pop(3);
console.assert === ["mario", "luigi", "toad", "peach"]

// .push()

// .slice()
var nintendo = ["mario", "luigi", "toad", "yoshi", "peach"]
var bestkart = nintendo.slice(-3, 5);
console.assert === "toad", "yoshi", "peach"
// .splice()
var nintendo = ["mario", "luigi", "toad", "yoshi", "peach"]
var ninsplicerm = nintendo.splice(0, 2);
var ninspliceadd = nintendo.splice(4 "bowser");
 console.assert === ["toad", "yoshi", "peach"
// .shift()
var nintendo = ["mario", "luigi", "toad", "yoshi", "peach"]
var ninshift = nintendo.shift();
// .unshift()

// .filter()

// .map()
