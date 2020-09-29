/**
 * Module dependencies.
 */
const net = require('net')

/**
 * Keep track of connections.
 */
let count = 0,
  users = {}

/**
 * Create server.
 */
const server = net.createServer(conn => {
  conn.setEncoding('utf-8')
  conn.write('\n > welcome to \033[92mnode-chat\033[39m!' + '\n > ' + count + ' other people are connected at this time.' + '\n > please write your name and press enter: ')
  count++

  // the nickname for the current connection
  let nickname = undefined

  function broadcast(msg, exceptMyself) {
    for (let i in users) {
      if (!exceptMyself || i !== nickname) {
        users[i].write(msg)
      }
    }
  }

  conn.on('data', data => {
    /* let str = new Buffer(data)
    console.log(str.toString()) */
    // we remove the 'enter' character
    data = data.replace('\r\n', '')

    // the first piece of data we except is the nickname
    if (!nickname) {
      if (users[data]) {
        conn.write('\033[93m > nickname already in use. try again:\033[39m ')
        return
      } else {
        nickname = data
        users[data] = conn

        broadcast('\033[90m > ' + nickname + ' joined the room\033[39m\n')
      }
    } else {
      // otherwise we consider it a chat message
      broadcast('\033[96m > ' + nickname + ':\033[39m ' + data + '\n', true)
    }
  })

  conn.on('close', () => {
    count--
    delete users[nickname]
    broadcast('\033[90m > ' + nickname + ' left the room\033[39m\n')
  })
})

/**
 * Listen
 */
server.listen(3000, () => console.log('\033[96m   server listening on *:3000\033[39m'))
