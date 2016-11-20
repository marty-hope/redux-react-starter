const person = {
    firstname: "Bob",
    lastname: "Smith"
};

const newPerson = Object.assign({}, person);

console.dir(person);
console.dir(newPerson);
console.log(person === newPerson);