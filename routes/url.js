const express = require("express");
// const mongoose = require("mongoose");

const router = express.Router();
const {getter  ,replier} = require("../controllers/functions");

router.use(express.urlencoded({ extended: false }));







router.post("/api" , getter);



router.get("/:target" , replier);


module.exports = router;
