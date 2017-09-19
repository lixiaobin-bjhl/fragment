var util = require('util');
var fs = require('fs');

var readFile = util.promisify(fs.readFile);

(async function () {
   var appFile = await readFile('./app.js');
   console.log(1);
   console.log(appFile.toString());
   var httpFile = await readFile('./http.js');
   console.log(2);
   console.log(httpFile.toString());
   console.log(3);
})();

console.log(6);


var a = readFile('./apps.js');