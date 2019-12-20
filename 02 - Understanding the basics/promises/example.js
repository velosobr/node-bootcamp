const fs = require('fs')
const util = require('util')

const readFilePromise = util.promisify(fs.readFile)

const fileContent = fs.readFileSync(__filename)

console.log('fileContent', fileContent);
console.log('test 1');

readFilePromise(__filename)
.then(fileData => console.log(fileData))

console.log('test 2');
