// toFixed визначає кількість значень після крапки
const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);
console.log(`total: ${total.toFixed(2)}`);


function sum(previous, next){
    return previous + next;
}

//2exmp

const grades = [75, 50, 90, 80, 65, 96];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

function getMax(acc, elem){
    return Math.max(acc, elem);
}

function getMin(acc, elem){
    return Math.min(acc, elem);
}

console.log(`max: ${maximum}`);
console.log(`min: ${minimum}`);