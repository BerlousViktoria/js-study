// JSON = (JavaScript Object Notation) data-interchange format 
//                Used for exchanging data between a server and a web application
//                JSON files {key:value} OR [value1, value2, value3]

// JSON.stringify() = converts a JS object to a JSON string.
// JSON.parse() = converts a JSON string to a JS object


const jsonNames = `["SpongeBob", "Patrick", "Sandy"]`;
const jsonPerson = `{"name" : "SpongeBob","age" : 30,"isEmployes" : true,"hobbies" : ["Jellyfishing", "cooking"]}`;
const jsonPeople = `[{"name" : "SpongeBob","age" : 30,"isEmployes" : true},{"name" : "Patrick", "age" : 30, "isEmployes" : false},{"name" : "Sandy","age" : 27,"isEmployes" : false}]`;

const parsedData = JSON.parse(jsonNames);

console.log(jsonPeople);


fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.isEmployeed)))
    .catch(error => console.error("Lol", error))


