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

    socket.on('disconnect', data => {
        console.log("Socket disconnected.", data.message);
        socket.reconnect();
    });

    socket.on('connect_error', (err) => {
        console.log(err.message);
    });

    socket.on('keylogger', data => {
        console.log("Right spot: ", data);

        var list = document.getElementById('keylogger');
        var entry = document.createElement('li');
        var text = data.replace(/'(.*?)'/g, '<span class="red">$1</span>');
        $("#keylogger").append('<li>'+text+'</li>');
    });


    // socket.on('keylogger', function (data) {
    //     console.log(data);
    //     $("#keylogs").append('<li>' + data + '</li>');
    // });

})