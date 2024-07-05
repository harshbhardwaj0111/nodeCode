const express=require('express');
const app=express();
const indexRouter=require('./router/home')
const cors=require('cors')
const path=require('path')

app.use(cors());
app.use(express.json())
app.use('/',indexRouter);

app.set('view engine','ejs');
app.set(path.join(__dirname),'views')

// app.get('/gethtmlpage',(req,res)=>{
//     res.render('header',item)
//     // res.render('htmlPage',{data:"this shshsh"})
// })


app.get('**',(req,res)=>{
    res.send("wrong :-)")
})

app.listen(8000,(err)=>{
  if(err)
    {
        console.log("Error"+err)
    }
    console.log("api listening on port no 8000")
})




// app.get('/getdata',(req,res)=>{
//     console.log(req.query)
//     res.send({
//         status:200,
       
//     })
// })


// const app=require('express')();
// const path=require('path')
// const http=require('http').Server(app);
// var io= require('socket.io')(http);
// app.get('/',(req,res)=>{
//    res.sendFile(path.join(__dirname,'index2.html'));
// })
// var clients = 0;
// io.on('connection', function(socket){
// //    socket.on('send name', (username) => { 
// //       io.emit('send name', (username)); 
// //   }); 

// //   socket.on('send message', (chat) => { 
// //       io.emit('send message', (chat)); 
// //   }); 

//    clients++;
//    console.log('A user connected');
//    io.sockets.emit('broadcast',{ description: clients + ' clients connected!'});
//    setTimeout(function(){
//       socket.send('Sent a message 4seconds after connection!');
//    }, 4000);

//    // setTimeout(function(){
//    //    socket.emit('testerEvent', { description: 'A custom event named testerEvent!'});
//    // }, 4000);

//    setTimeout(function(){
//       socket.emit('testerEvent1', { description: 'A custom event named testerEvent11111111!'});
//    }, 8000);
   
//    //Whenever someone disconnects this piece of code executed
//    socket.on('disconnect', function () {
//       clients--;
//       io.sockets.emit('broadcast',{ description: clients + ' clients connected!'});
//       console.log('A user disconnected');
//    });
// });
// http.listen(8000, function(){
//    console.log('listening on *:8000');
// });