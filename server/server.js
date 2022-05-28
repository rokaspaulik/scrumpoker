const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    io.emit('hello', 'world');
    console.log('a user connected');
});

io.on('disconnect', (reason) => {
    console.log('a user disconnected');
});

server.listen(3030, () => {
  console.log('listening on *:3030');
});
