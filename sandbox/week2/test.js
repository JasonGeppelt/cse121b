let myVariable = "Hello world!";
console.log;


let one = 1;
let two = '2';
let result = one + two;

console.log(typeof(result))

// Changes result from string type to number
result *= 1

console.log(typeof(result) + '\n')





let yourAge = 12
if (yourAge > 17) {
    console.log('You can vote.');
} else {
    console.log('You cannot vote.');
}


// Coin flipper
let randomNum = Math.random();
console.log(randomNum);
if (randomNum > 0.5) {
    console.log('Heads');
} else {
    console.log('Tails');
}

// DOM (html elements accessed through JS)
document.querySelector('h1').textContent = 'new output';
document.getElementById('p2').textContent = 'My 2nd paragraph.';
// or
document.querySelector('#p2').textContent = 'My 2nd paragraph.';
document.querySelector('ul').innerHTML = '<li>List Item</li>';
document.querySelectorAll('p')[1].textContent = "test";

let date = new Date();
console.log(date);
let year = date.getFullYear();
console.log(year);


function show() {
    console.log('This function ran.');
}

show();


function addIt(n1, n2) {
    return (n1 + n2)
}

console.log(addIt(2, 9));

// old school 1.Create 2.Add content 3.Add to page
let newHeading = document.createElement('h2');
newHeading.textContent = 'This is a JS heading!';
document.body.appendChild(newHeading);

//or

// add with innerHTML
let div = document.querySelector('div');
div.innerHTML = '<h2>This is my 2nd JS heading.</h2>';




let img = 'lakeview.jfif';

document.querySelector('img').setAttribute('src', img);
document.querySelector('img').setAttribute('alt', 'lakeside view');



//Arrays
let classes = ['CSE121b', 'CIT111', 'WDD230', 'WDD130'];
console.log(classes[2]);

classes[1] = 'heyo'

console.log(classes);


//push appends
classes.push('CIT222')
console.log(classes);

//shift removes first one
classes.shift()
console.log(classes);

//splice (starting index, how many to remove including starting index)
classes.splice(1, 3);
console.log(classes);


