const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const {ExpressPeerServer} = require('peer');

const app = express();
app.use(express.json());

const server = http.createServer(app);
const io = socketio(server).sockets;

const generateID = () => (Math.random().toString(36) + '0000000000000000000').substr(2, 16);

const peerServer = ExpressPeerServer(server, {
  debug: true, 
  path: '/',
  generateClientId: generateID
});

app.use('/mypeer', peerServer);

io.on('connection', function(socket) {
  console.log('socket connected')
  socket.on('join-room', ({userID, roomID}) => {
    // join new user to given room
    socket.join(roomID);

    //broadcast new user has joined video chat room 
    socket.to(roomID).broadcast.emit('user-connected', userID);
  })
})

const port = 5000;
server.listen(port, () => console.log(`server is running on port ${port}`));