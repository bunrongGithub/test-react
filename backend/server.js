const connection = require("./connection");


const db = connection.getConnection();


const express = require("express");

const app = express();
app.get("/",(_req,res)=> 
{
    res.send({message: "hello"});
})
app.get("/user", async (_request,response,next) => {
    try {
        const query = "select * from technician";
        const [rows] = await db.promise().query(query);
        console.log(rows);
        response.status(200).send(rows);
    } catch (error) {
        console.log(error)
        next(error)
    }
})
app.listen(3000,()=> console.log(`server running at: 
    http://localhost:3000`));