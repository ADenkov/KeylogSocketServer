document.addEventListener('DOMContentLoaded', () => {
    
    var socket = io();
    console.log(socket)

    socket.on('connect', function () {
        console.log("success")
        socket.send("Im connected");
        socket.emit('message', { data: 'Im connected' });
    });

    socket.on('message', data => {
        console.log(`Message received: ${data}`);
    });

    socket.on('disconnect', function () {
        console.log("Socket disconnected.");
        socket.socket.reconnect();
    });

    socket.on('connect_error', (err) => {
        console.log(err.message);
    });

    socket.on('shit', data => {
        console.log(data);
    });

    socket.on('keylogger', function (data) {
        $("#keylogs").append('<li>' + data + '</li>');
    });

})