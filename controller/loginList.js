const dbConnect=require('../database/db2')
const jwt = require('jsonwebtoken');
let SecretKey="sjsjsj122#"
const postloginList=async (req,res)=>{
    try 
    {
        let db=await dbConnect()
        let collection=db.collection('loginList')
        const result = await collection.find({name:req.body.name}).toArray();
       // console.log('result of documents =>', result);
        if(result.length>0)
            {
                const token = jwt.sign(req.body, SecretKey,{ expiresIn: '1h' });
                    res.send({
                        status:200,
                        data:"Login Successfull",
                        "token":token
                    })
            }
            else
            {
                res.send({
                    status:400,
                    data:"Invalid Login"
                }) 
            }
    } 
    catch (error) 
    {
        res.send({
            status:404,
            data:"something went in API"
        })
    }
}


module.exports={
    postloginList
}