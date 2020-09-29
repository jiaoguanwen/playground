let fs = require("fs")

let data = fs.readFileSync('./data/data.js')

console.log(data.toString())
console.log(data)
console.log("程序执行结束!")

console.log(new Buffer('jiaoguanwen').toString('base64'))

console.log('异步----------------------------------')

fs.readFile('./data/data.doc', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("异步程序执行结束!");
