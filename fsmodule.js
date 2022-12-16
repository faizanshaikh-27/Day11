const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
    console.log(err, data)
});
console.log("Thankyou");

const a = fs.readFileSync('file.txt')
console.log(a);
console.log(a.toString());

fs.writeFile('file2.txt', "This is a Second text file", ()=> {
    console.log("written in the file")
});
console.log("Finished reading file");