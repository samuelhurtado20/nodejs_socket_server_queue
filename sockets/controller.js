const socketController = (socket) => {
    
    console.log('connected client.', socket.id );

    socket.on('disconnect', () => {
        console.log('disconnected client.', socket.id );
    });

    socket.on('send-msg', ( payload, callback ) => {        
        const id = 123456789;
        callback( id );
        socket.broadcast.emit('send-msg', payload );
    })
}

module.exports = {
    socketController
}