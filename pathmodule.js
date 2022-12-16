const path = require('path');
const a1 = path.basename('C:\\temp\\myfile.html');
console.log(a1);

const a2 = path.dirname('/mid/app');
console.log(a2.toString());

const a3 = path.extname(__filename);
console.log(a3);

const a4 = path.format({root:'/', base: 'file', ext: '.txt'});
console.log(a4, "here is a4");