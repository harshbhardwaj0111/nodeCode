const dbConnect=require('../database/db2');
const getcourseList=async (req,res)=>{
    try 
    {
        let db=await dbConnect();
        const collection = db.collection('courselist');
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
const postcourseList=async (req,res)=>{
    try 
    {
        let db= await dbConnect();
        let collection = db.collection('courselist');
        const data=[{
            name:"Mr. Narender",
            city:"Sirsa",
            Mob:11111111,
            status:200,
            data:"put api called from teacher list"
        },
        {
            name:"Gagan goyal",
            city:"Sirsa",
            Mob:946852371,
            status:200,
            data:"put api called from teacher list"
        }]
        const insertResult = await collection.insertMany(data);
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

const deletecouseList=async(req,res)=>{
    try 
    {
        let db= await dbConnect();
        let collection = db.collection('courselist');
        const deleteResult = await collection.deleteOne({ name:req.query.name });
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

// const updatecourseList=async (req,res)=>{
//     try 
//     {
//         let db= await dbConnect();
//         let collection = db.collection('courselist');
//         const updateResult = await collection.updateOne({ name:"jyoti" }, { $set: { name:"muskan" } });
//         console.log('Updated documents =>', updateResult);
//     }
//     catch (error) 
//     {
//         res.send({
//             status:400,
//             data:"something went wrong in your api"
//         })
//     }
// }

const postcourseListbody=async (req,res)=>{
    try 
    {
        let db= await dbConnect();
        let collection = db.collection('courselist');
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

const updatecourseList=async (req,res)=>{
    try 
    {
        let db= await dbConnect();
        let collection = db.collection('courselist');
        const updateResult = await collection.updateOne({ name:req.query.name }, { $set: { name:req.body.name ,course:req.body.course,mob:req.body.mob,city:req.body.city} });
        console.log('Updated documents =>', updateResult);
        res.send({
            status:200,
            data:"data updated"
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

const findcourseList=async(req,res)=>{
    try 
    {
        let db= await dbConnect();
        let collection = db.collection('courselist');
        const filteredDocs = await collection.find({ name: req.body.name }).toArray();
        console.log('Found filtered documents =>', filteredDocs);
        res.send({
            status:200,
            data:"data filtered"
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
    getcourseList,postcourseList,deletecouseList,updatecourseList,postcourseListbody,findcourseList
};