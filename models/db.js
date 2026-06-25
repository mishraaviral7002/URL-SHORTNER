const mongoose = require("mongoose");
const { URL } = require("url");



const urlSchema  = new mongoose.Schema({
        id:{
        type:Number ,
        unique:true,
        required :true,
    
            } ,
        shortURL:{
            type:String,
            required:true,
            unique:true,
        }, 
        longUrl:{
            type:String,
            required:true,
            unique:true,
        }

}, {
    timestamps:true
})


const Url = mongoose.model("Url", urlSchema);




module.exports = Url;