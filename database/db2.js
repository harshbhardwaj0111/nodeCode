const { MongoClient } = require('mongodb'); 

const url ="mongodb+srv://harsh:harsh1234@cluster0.72hoeqz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(url);
async function dbConnect()
{
    const result=await client.connect();
    const db=result.db("sample_mflix");
    return db;
}

module.exports=dbConnect;