const path = require('path');

// Resolve
// -- 
const myDir = "My-dir"
const absolutePath = path.resolve('dir', myDir, '../subdir', 'file.txt');
// console.log(absolutePath);

// join 
// -- 
const joinedPath = path.join('dir', 'subdir', 'file.txt');
// console.log(joinedPath);


// basename
// --
const fileName = path.basename(absolutePath);
// console.log(fileName); // file.txt

// dirname
// --
const dir = path.dirname(joinedPath);
// console.log(dir); // /home/user


// Extension
// --
const ext = path.extname('file.txt');
console.log(ext); // .txt

