// // basic GET usage

// async function main(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();
//     console.log(data);
// }

// main().catch(console.error);


// streams

// import {Writable } from "node:stream";
// import {stream} from "undici";

// async function fethGitHubRepos(){
//     const url = 'https://api.github.com/users/nodejs/repos';

//     await stream(
//         url,
//         {
//             method: 'GET',
//             headers: {
//                 'User-Agent': 'undici-stream-example',
//                 Accept: 'application/json',
//             },
//         },
//         res => {
//             let buffer = '';

//             return new Writable({
//                 write(chunk, encoding, callback){
//                     buffer += chunk.toString();
//                     callback();
//                 },
//                 final(callback){
//                     try{
//                         const json = JSON.parse(buffer);
//                         console.log(
//                             'Repository Names:',
//                             json.map(repo => repo.name)
//                         );
//                     } catch(error){
//                         console.error('Error parsing JSON:', error);
//                     }
//                     console.log('Stream processing completed.');
//                     console.log(`Response status: ${res.statusCode}`);
//                     callback();
//                 },
//             });
//         }
//     );
// }

// fethGitHubRepos().catch(console.error);


// accept - те, у якому форматі отримую
// content-type - те, у якому форматі надсилаю


// basic POST usage

// const body = {
//     title : 'foo',
//     body : 'bar',
//     userIdL: 1,
// };

// async function main2 () {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(body),
//         });
//         const data = await response.json();

//         console.log(data);
// }

// main2().catch(console.error);

const fs = require('fs');

fs.rename('before.json', 'after.json', err => {
    if (err){
        return console.error(err);
    }
});