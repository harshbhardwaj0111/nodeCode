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
    res.send("ee bhudbak galat page pr aagye to tum ache se ydd krk page ka path do vrna tumko bta denge hum :-)")
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