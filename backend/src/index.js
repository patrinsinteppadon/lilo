// const express = require("express");
// const app = express();

// const port = 4000;

// const http = require("http");
// const server = http.createServer(app);

// const io = require("socket.io")(server, { origins: "*:*" });
// app.use(express.static(__dirname + "/public"));

// io.sockets.on("error", (e) => console.log(e));
// server.listen(port, () => console.log(`Server is running on port ${port}`));

// let broadcaster;

// io.sockets.on("connection", (socket) => {
//   socket.on("broadcaster", () => {
//     broadcaster = socket.id;
//     socket.broadcast.emit("broadcaster");
//   });
//   socket.on("watcher", () => {
//     socket.to(broadcaster).emit("watcher", socket.id);
//   });
//   socket.on("disconnect", () => {
//     socket.to(broadcaster).emit("disconnectPeer", socket.id);
//   });
//   socket.on("offer", (id, message) => {
//     socket.to(id).emit("offer", socket.id, message);
//   });
//   socket.on("answer", (id, message) => {
//     socket.to(id).emit("answer", socket.id, message);
//   });
//   socket.on("candidate", (id, message) => {
//     socket.to(id).emit("candidate", socket.id, message);
//   });
//   socket.on('comment', (id, message) => {
//     socket.to(id).emit("comment", socket.id, message);
//   });
// });

const express = require("express")
const http = require("http")
const socketio = require("socket.io")
const morgan = require("morgan")

// used to generate unique id for each peer js connection from client
const {ExpressPeerServer} = require("peer")

const app = express();
app.use(express.json())

// create server
const server = http.createServer(app)
const io = socketio(server).sockets

// function generates custom unique ID 
const customIDGenerator = () => 
  (Math.random().toString(36) + "0000000000000000000").substr(2, 16);

// create peer server
const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/',
  generateClientId: customIDGenerator,
})

// TODO: change path of 'mypeer'
app.use("/mypeer", peerServer)

// TODO MAYBE: update function on connection & add more (disconnected, etc.)
io.on('connection', function(socket){
  console.log('socket connected')
}) 

const port = process.env.port || 5000;
server.listen(port, () => console.log(`Server is running on port: ${port}`))
