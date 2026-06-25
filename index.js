const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const appRouter = require("./routes/url"); 
const {connector} = require("./connection"); 
const app = express();

const PORT = process.env.PORT || 8000;
connector()

app.get("/" , (req, res)=>{
    const reply = `
        <h1>
        Hello Welcome To the Site 
        </h1></br>
        <h4>This Is a url Shortneing Service</h4>
        
        `;

        res.send(reply);
})


app.use("/" , appRouter);


app.listen(PORT , ()=>{console.log(`Server Started at ${PORT}`)});
