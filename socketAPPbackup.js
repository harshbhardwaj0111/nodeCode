var app = require('express')();
var path=require('path')
var http = require('http').Server(app);
var jyoti = require('socket.io')(http);
app.get('/', function(req, res){
   res.sendFile(path.join(__dirname,'index.html'));
});
jyoti.on('connection', function(socket){
    console.log('A user connected');
   
    setTimeout(function(){
        socket.emit('testerEvent', { description: 'A custom event named testerEvent!'});
       
       // socket.send('Sent a message 4seconds after connection hello user!');
     }, 4000);

     setTimeout(function(){
        socket.emit('chatdata', { description: 'A custom event named testerEvent1!'});
       
       // socket.send('Sent a message 4seconds after connection hello user!');
     }, 8000);
    //Whenever someone disconnects this piece of code executed
    socket.on('disconnect', function () {
       console.log('A user disconnected');
    });
 });
http.listen(8080, function(){
   console.log('listening on *:8080');
});