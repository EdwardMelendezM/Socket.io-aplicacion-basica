const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
  console.log("User connected:", socket.id);
});

http.listen(3001, () => {
  console.log('Servidor iniciado en el puerto 3000');
});