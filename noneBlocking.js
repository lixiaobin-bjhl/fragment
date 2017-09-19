
var fs = require('fs');

fs.readFile('./app.js', (err, data) => {
    if (err)  {
        throw err;
    }
    console.log(data.toString());
});

fs.readFile('./http.js', (err, data) => {
    if (err) { 
        throw err;
    }
    console.log(data.toString());
});