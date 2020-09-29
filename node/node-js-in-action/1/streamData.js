const fs = require('fs')
var stream = fs.createReadStream('./data.json')
stream.on('data', function(chunk) {
  console.log(chunk)
})
stream.on('end', function() {
  console.log()
  console.log('finished')
})
