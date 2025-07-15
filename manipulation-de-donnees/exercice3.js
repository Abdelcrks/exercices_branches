const fs = require('fs');
const { TransformStreamDefaultController } = require('stream/web');
const filepath = 'data.json';

const content = fs.readFileSync(filepath, {encoding: 'utf8', flag: 'r'});
const data = JSON.parse(content);
// write your code bellow

console.log(data[0])
console.log(data.length)
console.log(data[4])

let totalAge= 0
let middleAge = 0

data.forEach(person => {
    console.log(person.age)
    totalAge += person.age
});

middleAge = totalAge/ data.length
console.log(middleAge)