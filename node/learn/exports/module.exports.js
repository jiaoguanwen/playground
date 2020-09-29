module.exports = {
  name: 'jiaoguanwen',
  write: word => {
    console.log('jiaoguanwen write: ' + word)
  },
  age: 25
}

module.exports.speak = word => {
  console.log('jiaoguanwen speak: ' + word)
}
