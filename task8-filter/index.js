//1exmp
let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(`even: ${evenNums}`);
console.log(`odd: ${oddNums}`);

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}

//2exmp

const ages = [17, 18, 14, 15, 19, 60];
const adults = ages.filter(isAdults);
const children = ages.filter(isChildren);

function isAdults(element){
    return element >= 18;
}
function isChildren(element){
    return element < 18;
}
console.log(`adults: ${adults}`);
console.log(`children: ${children}`);

//3exmp

const words = ['apple', 'orange', 'banana', 'kiwi', 'pomegranate', 'coconut'];

function getShortWords(element){
    return element.length <= 6;
}

function getLongWords(element){
    return element.length > 6;
}

const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log(`short words: ${shortWords}`);
console.log(`long words: ${longWords}`);