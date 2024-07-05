const dbConnect = require('../database/db');
const getteacherList=async (req,res)=>{
    try 
    {
        let db=await dbConnect();
        const collection = db.collection('teacherList');
        const result=await collection.find({}).toArray();
        console.log("Result is"+result)
        // res.send({
        //     Status:200,
        //     body:result
        // })
        res.render('htmlPage',{data:result})
    } 
    catch (error) 
    {
        res.send({
            status:400,
            data:"something went wrong"
        })
    }
}
const putteacherList=async(req,res)=>{
    try 
    {
        let db=await dbConnect();
        const collection = db.collection('teacherList');
        const data=[{
            "name":"Mr. Narender",
            "city":"Sirsa",
            "Mob":11111111,
            "status":200,
            "data":"put api called from teacher list"
        },
        {
            "name":"Gagan goyal",
            "city":"Sirsa",
            "Mob":946852371,
            "status":200,
            "data":"put api called from teacher list"
        }]
        const insertResult = await collection.insertMany(data);
        res.send(insertResult); 
    } 
    catch (error) 
    {
        res.send({
            status:400,
            data:"something went wrong in put Teacher List"
        })
    }
}
const postteacherList=(req,res)=>{
    try 
    {
       res.send({
            name:"Gagan Goyal",
            city:"Sirsa",
            Mob:946582036,
            status:200,
            data:"Post api called from teacher list"
        }) 
    } 
    catch (error) 
    {
        res.send({
            status:400,
            data:"something went wrong in Post Teacher List"
        })
    }
}

module.exports={
    getteacherList,postteacherList,putteacherList
}