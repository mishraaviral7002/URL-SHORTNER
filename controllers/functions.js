const express = require("express");
const mongoose = require("mongoose");


const Url = require("../models/db");


function base64Encode(num) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  let result = "";

  if (num === 0) return chars[0];

  while (num > 0) {
    result = chars[num % 64] + result;
    num = Math.floor(num / 64);  
  }

  return result;



}




async function getter(req, res ){
    const target = req.body.target;
    const result = await Url.find({ longUrl : target  }); 

    let lastCount =await Url.countDocuments();
    let final = base64Encode(lastCount+101);
    if(result.length ===  0){
         await Url.create({
            id:lastCount+1,
            shortURL : final.toString(),
            longUrl: target
        });

        return res.json({answer  :final});

        
    }
    else {
       return res.json({shortUrl : `${result[0].shortURL}`});
    }
}

async function replier(req , res){
    const target = req.params.target;
    const result = await Url.find({ shortURL : target  }); 
     
    if(result.length ===  0){
        return res.status(404).json({message:"Link Not Found"})
    }
    else{
        return res.redirect(result[0].longUrl);
    }


}



module.exports = {getter ,replier};