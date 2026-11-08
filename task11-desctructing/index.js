//exmpt1 swaping elements

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

//exmp2 swaping elements in array

const colors = ['red', 'green', 'blue', 'black'];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

//examp3 assing array elements to variables

const colors2 = ['red', 'green', 'blue', 'black'];

const [firstColor, secondColor, thirdColor, ...extraColor] = colors;

console.log(firstColor, secondColor, thirdColor);

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColor);


//exmp4 values from objects

function displayPerson({}){

}


// const person1 = {
//     firstName: "Spongebob",
//     lastName: "Squarepans",
//     age: 30,
//     job: "Fry Cook"
// }

// const person2 = {
//     firstName: "Patrick",
//     lastName: "Star",
//     age: 45
// }

// const {firstName, lastName, age, job} = person2;
// const finalJob = job || "Unemployed";

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(finalJob);

//exmp5

function displayPerson({firstName, lastName, age, job="Unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepans",
    age: 30,
    job: "Fry Cook"
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 45
}

displayPerson(person1);
displayPerson(person2);