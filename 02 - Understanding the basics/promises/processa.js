//callback > promise > async/await

const fs = require('fs')

console.log(1);

function callback(err, content) {
  console.log(err, String (content));
  
}

fs.readFileSync('./example.js', callback)

console.log(2);

console.log(3);


