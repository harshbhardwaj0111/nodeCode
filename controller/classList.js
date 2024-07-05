const dbConnect=require('../database/db2');
const getClassList=async (req,res)=>{
    try 
    {
        let db=await dbConnect();
        const collection = db.collection('classList');
        const result=await collection.find({}).toArray();
        console.log("Result is"+result)
        res.send({
            Status:200,
            body:result
        })
    } 
    catch (error) 
    {
        res.send({
            status:400,
            data:"something went wrong"
        })
    }
}
const postClassList=async (req,res)=>{
    try 
    {
        let db= await dbConnect();
        let collection = db.collection('classList');
        const insertResult = await collection.insertOne(req.body);
        console.log(insertResult);
        res.send(insertResult); 
    } 
    catch (error) 
    {
        res.send({
            status:400,
            data:"Something went wrong in api"
        })
    }
}
const deleteClassList=async(req,res)=>{
    try 
    {
        let db= await dbConnect();
        let collection = db.collection('classData');
        const deleteResult = await collection.deleteOne({ name:req.query.id });
        console.log('Deleted documents =>', req.query);
        res.send({
            status:200,
            data:"item is deleted"
        })
    }
    catch (error) 
    {
        res.send({
            status:400,
            data:"something went wrong in your api"
        })
    }
}
module.exports={
    postClassList,getClassList,deleteClassList
}