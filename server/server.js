const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const caminhopublico = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(caminhopublico));

io.on('connection', (socket) => {
    console.log('Novo utilizador conectado');

    socket.on('disconnect', () => {
        console.log('Utilizador desconectado');
    });
});

server.listen(port, () => {
    console.log(`Server a ouvir a porta ${port}`);
});