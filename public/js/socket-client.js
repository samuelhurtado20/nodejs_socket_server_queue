// Referencias del HTML
const lblOnline  = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMsg = document.querySelector('#txtMsg');
const btnSend  = document.querySelector('#btnSend');

const socket = io();

socket.on('connect', () => {
    // console.log('Conectado');
    lblOffline.style.display = 'none';
    lblOnline.style.display  = '';
});

socket.on('disconnect', () => {    
    // console.log('Desconectado del servidor');
    lblOnline.style.display  = 'none';
    lblOffline.style.display = '';
});

socket.on('send-msg', (payload) => {
    console.log( payload )
})

btnSend.addEventListener( 'click', () => {
    const msg = txtMsg.value;
    const payload = {
        msg,
        id: '123ABC',
        date: new Date().getTime()
    }
    
    socket.emit( 'send-msg', payload, ( id ) => {
        console.log('From server', id );
    });
});