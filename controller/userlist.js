const getuserlistnew=(req,res)=>{
    res.send("get api called in router from controler")
}

const getuserlist=(req,res)=>{
    res.send(
        {
            "Status":200,
            "listOfuser":[{"name":"harsh", "city":"sirsa"},{"name":"rohit", "city":"Enb"},{"name":"yogii", "city":"Delhi"}],
            "mob":555555
        })
}


const createuserlist=(req,res)=>{
    res.send(
        {
            "Status":200,
            "Data":req.body,
           "message":"user created successfully",
           
        }
    )
    console.log("Get aPi Called");
}
 

module.exports={
    getuserlistnew,getuserlist,createuserlist
}