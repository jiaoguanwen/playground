const http = require('http')

function start() {
  http.createServer((req, res) => {
    console.log(Date.now(), 'rec a req')
    res.writeHead(200, {"Content-Type": "text/plain"})
    res.write('hello world')
    // can not write res after end
    setTimeout(() => {
      res.write('after 5000ms, hello world')
      res.end()
    }, 5000)
  }).listen(8888)
  console.log('server is running at 8888')
}

exports.start = start

console.log(exports)
