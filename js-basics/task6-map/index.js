//1exmp
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(cubes);

function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}

// 2exmp

const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];

function upperCase(element){
    return element.toUpperCase();
}
function lowerCase(element){
    return element.toLowerCase();
}

const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);
console.log(studentsUpper);
console.log(studentsLower);

// 3exmp

const dates = ["2024-1-10", "2022-1-10", "2021-1-10", "2020-1-10"];

function formatDates(element){
    const parts = element.split('-');
    return `${parts[2]}/${parts[1]}/${parts[0]}`;    
}

const arrangedDates = dates.map(formatDates);
console.log(arrangedDates);


