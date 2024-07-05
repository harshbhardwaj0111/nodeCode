const dbConnect=require('../database/db2');
const getsoftechList=async (req,res)=>{
    try 
    {
        let db=await dbConnect();
        const collection = db.collection('softechList');
        const result=await collection.find({}).toArray();
        app.get('/gethtmlpage',(request,response)=>{
            response.render('header',{item:request.query.name})
        })
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

module.exports={
    getsoftechList
}