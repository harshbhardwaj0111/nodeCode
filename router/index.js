const express=require('express');

const route=express.Router()
const exportUser=require('../controller/userlist')
route.get('/getuserlistnew',exportUser.getuserlistnew )
route.get("/getuserList",exportUser.getuserlist)

route.get("/getcourseList",(req,res)=>{
    res.send(
        {
            "Status":200,
            "listOfuser":[{"name":"harsh", "city":"sirsa"},{"name":"rohit", "city":"Enb"},{"name":"yogii", "city":"Delhi"}],
            "mob":5555553
        }
    )
    console.log("Get aPi Called");
})

route.post("/createuserList",exportUser.createuserlist)

module.exports=route