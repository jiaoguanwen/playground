const socketio = require('socket.io')
let io = null
let guestNumber = 1
let nickNames = {}
let namesUsed = []
let currentRoom = {}

exports.listen = server => {
  // console.log('server: ', server)
  // console.log('socketio: ', socketio
  io = socketio.listen(server)
  io.set('log level', 1)
  io.sockets.on('connection', socket => {
    guestNumber = assignGuestName(socket, guestNumber, nickNames, namesUsed)
    joinRoom(socket, 'Lobby')
    handleMessageBroadcasting(socket, nickNames)
    handleNameChangeAttempts(socket, nickNames, namesUsed)
    handleRoomJoining(socket)
    socket.on('rooms', () => {
      socket.emit('rooms', io.sockets.manager.rooms)
    })
    handleClientDisconnection(socket, nickNames, namesUsed)
  })
}

function assignGuestName(socket, guestNumber, nickNames, namesUsed) {
  console.log(socket)
  console.log(socket.id)
  let name = 'Guest' + guestNumber
  nickNames[socket.id] = name
  socket.emit('nameResult', {
    success: true,
    name: name
  })
  namesUsed.push(name)
  return guestNumber + 1
}

function joinRoom(socket, room) {
  socket.join(room)
  currentRoom[socket.id] = room
  console.log('currentRoom', currentRoom)
  socket.emit('joinResult', { room })
  socket.broadcast.to(room).emit('message', {
    text: nickNames[socket.id] + ' has joined ' + room + '.'
  })

  const usersInRoom = io.sockets.clients(room)
  console.log('userInRoom: ', usersInRoom)
  if (usersInRoom.length > 1) {
    let usersInRoomSummary = 'Users currently in' + room + ': '
    for (let index in usersInRoom) {
      const userSocketId = usersInRoom[index].id
      if (usersInRoomSummary !== socket.id) {
        if (index > 0) {
          usersInRoomSummary += ','
        }
        usersInRoomSummary += nickNames[userSocketId]
      }
    }
    usersInRoomSummary += '.'
    socket.emit('message', { text: usersInRoomSummary })
  }
}

function handleMessageBroadcasting(socket) {
  socket.on('message', message => {
    socket.broadcast.to(message.room).emit('message', {
      text: nickNames[socket.id] + ': ' + message.text
    })
  })
}

function handleNameChangeAttempts(socket, nickNames, namesUsed) {
  socket.on('nameAttempt', name => {
    if (name.indexOf('Guest') === 0) {
      socket.emit('nameResult', {
        success: false,
        message: 'Names cannot begin with "Guest".'
      })
    } else {
      if (namesUsed.indexOf(name) === -1) {
        const previousName = nickNames[socket.id]
        const previousNameIndex = namesUsed.indexOf(previousName)
        namesUsed.push(name)
        nickNames[socket.id] = name
        delete namesUsed[previousNameIndex]
        socket.emit('nameResult', {
          success: true,
          name
        })
        socket.broadcast.to(currentRoom[socket.id]).emit('message', {
          text: previousName + ' is now known as ' + name + '.'
        })
      } else {
        socket.emit('nameResult', {
          success: false,
          message: 'That name is already in use'
        })
      }
    }
  })
}

function handleRoomJoining(socket) {
  socket.on('join', room => {
    socket.leave(currentRoom[socket.id])
    joinRoom(socket, room.newRoom)
  })
}

function handleClientDisconnection(socket) {
  socket.on('disconnect', () => {
    const nameIndex = namesUsed.indexOf(nickNames[socket.id])
    delete namesUsed[nameIndex]
    delete nickNames[socket.id]
  })
}
