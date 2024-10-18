const fs = require('fs');
const numPort = require('./utils/port');

const file = "exemple.txt";
let content = `Hello there, running on port ${numPort}`;
const callback = (error) => {
    if (error) {
        console.log(error);
        return;
    }
    // console.log("Success")
};

fs.writeFile(file, content, callback);

fs.readFile(file, 'utf8', (error, data) => {
    if (error) {
        console.log(error);
        return;
    }

    console.log(data);
    
});