var http = require('http')
var fs = require('fs')
http.createServer((req,res)=> {
  res.writeHead(200, {'Content-Type': 'image/png'})
  fs.createReadStream('./google.png').pipe(res)
}).listen(3000)