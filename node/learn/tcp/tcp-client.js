const net = require('net')

const client = net.connect(
  3000,
  '127.0.0.1',
  () => {
    client.write('jiaoguanwen')
    client.write('hi')
    console.log('test success')
  }
)

// TODO add tcp client display message
