const mongoose = require("mongoose");

async function connector() {
    return mongoose.connect(process.env.MONGO_URI).then(() =>{console.log("Server Started")});
    
}

module.exports= {connector};