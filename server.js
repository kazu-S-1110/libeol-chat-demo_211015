const express = require('express');
const app = express();
const server = require('http').createServer(app);

const port = 3005;

server.listen(port, () => {
  console.log('server listening', 'http://localhost' + port);
});

app.use('/public', express.static('./public'));
app.get('/', (req, res) => {
  res.redirect(302, './public');
});

const socketio = require('socket.io');
const io = socketio.listen(server);

io.on('connection', (socket) => {
  console.log('access to user:', socket.client.id);
  socket.on('chatMessage', (msg) => {
    console.log('message', msg);
    io.emit('chatMessage', msg);
  });
});
