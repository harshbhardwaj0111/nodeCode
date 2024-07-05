const jwt = require('jsonwebtoken');
let SecretKey = "sjsjsj122#"
const getStudentList = (req, res) => {
    
    try 
    {
        const verified = jwt.verify(req.query.id, SecretKey);
        if (verified) 
        {
            res.send({
                status: 200,
                value:true,
                data: "get api called successfully"
            })
        }
        else 
        {
            res.send({
                status: 400,
                value:false,
                data: "session expire"
            })
        }
    }
    catch (err) 
    {
        res.send({
            status: 400,
            data: err
        })
    }
}


const getStudentList1 = (req, res) => {
    try {
        res.send({
            status: 200,
            data: "post api called successfully",
            body: req.body

        })
    }
    catch (err) {
        res.send({
            status: 400,
            data: "something went wrong"
        })
    }
}




module.exports = {
    getStudentList, getStudentList1
}