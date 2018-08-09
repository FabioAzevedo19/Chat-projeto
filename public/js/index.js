var socket = io();
socket.on('connect', function () {
    console.log('Conectado ao server');
});

socket.on('novaMensagem', function (mensagem) {
    console.log(mensagem);
});
socket.on('disconnect', function () {
    console.log('Desconectado do server');
});



