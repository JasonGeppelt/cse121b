document.querySelector('#result').textContent = square(4)

// Declaration (globalish. you can reference from anywhere, even before)
function square(number) {
    return number * number;
}


// Expression 
let square1 = function(number) {
    return number * number;
}

document.querySelector('#result1').textContent = square(4)


// Arrow
let square2 = (number) => {
    return number * number;
}

document.querySelector('#result2').textContent = square(4)

//or
let square3 = (number) => number * number;

document.querySelector('#result3').textContent = square(4)



// ARRAY METHODS

// .forEach
const simple_array = ['a', 'b', 'c'];

//      Declaration
simple_array.forEach(show_array);

function show_array(item) {
    console.log(item);
}

//      Expression
simple_array.forEach(function(item) {
    console.log(item);
})

//      Arrow
simple_array.forEach(item => console.log(item));







const steps = ['one', 'two', 'three']

function makeList(item) {
    
    document.querySelector('#myList').innerHTML += `<li>${item}</li>`
}
steps.forEach(makeList)


// in .forEach, the function parameters is (item, index). 
// so each item and each item's index will be passed into the function.
steps.forEach(function (item, index) {
    if (item === 'two') {
        luckyIndex = index;
    }
})
console.log(luckyIndex);


// .map saves changes to another array
const array1 = [1, 4, 9, 16];

const array2 = array1.map(function (item) {
    return item * 2;
})

console.log(array1);
console.log(array2);









const letterArray = ['a', 'b', 'a']

const numberArray = letterArray.map(function(letter) {
    let num;
    if (letter == 'a') {
        num = 4;
    }
    if (letter == 'b') {
        num = 3;
    }
    return num
})

console.log(letterArray);
console.log(numberArray);



// REDUCE
// .reduce has two parameters. (total, item) total is a variable == 0 and item is obviously each item
const pointsTotal = numberArray.reduce(function (total, item) {
  return total + item;
});
const gpa = pointsTotal / numberArray.length;

console.log(pointsTotal);
console.log(gpa);




// filter array
// just like .map, make new array but only with items that meet condition
const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter(function (word) {
  return word.length < 6;
});

console.log(words);
console.log(shortWords);

//try to use arrow method even though i haven't been









// EVENTS
const buttonElement = document.getElementById("submitButton");

function copyInput() {
  const inputElement = document.getElementById("inputBox");
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = inputElement.value;
}

// .addEventListener is a method of the buttonElement variable we created. first parameter is 
// the trigger, the second is what happens
buttonElement.addEventListener("click", copyInput);



let btn = document.querySelector('#add');
let output = document.querySelector('#sum');

function addNums() {
    let num1 = document.querySelector('#add1').value;
    let num2 = document.querySelector('#add2').value;

    output.value = Number(num1) + Number(num2);
}

btn.addEventListener('click', addNums);



// quick modulus example using arrow array method
const numbers = [1, 2, 3, 4, 5, 6]

let evenNumbers = numbers.filter(nums => nums % 2 === 0)

console.log(numbers);
console.log(evenNumbers);