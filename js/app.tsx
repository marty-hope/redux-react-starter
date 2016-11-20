const person = {
    firstName: "Bob",
    lastName: "Smith"
};

const newPerson = Object.assign({}, person);

//destructuring with variable rename
const {firstName : fn, lastName: ln} = person;

const colors = ["red", "blue", "green"];
const newColors = colors.concat("yellow");
const otherColors = newColors.slice(1);

const doIt = (a=1, b=2, c=4) => {
    console.log(a, b, c);
}

const c = ['red', 'blue', 'yellow', 'green'];
const [faveColor, secFavColor, ...theRest] = c;

const getColors = (a, b, ...colors) => {
    console.log(colors);
}
console.dir(person);
console.dir(newPerson);
console.log(person === newPerson);
console.log(fn);
console.log(ln);

console.dir(colors);
console.dir(newColors);
console.dir(otherColors);
console.log(colors === newColors);

doIt(100,200);

getColors(1, 2, c);
console.log('My favorite color is ' + faveColor);