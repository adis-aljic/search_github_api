const express = require("express")
const router = express.Router();
const path = require("path")
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: true })
router.use(bodyParser.json());   
router.get("/result",(req,res)=>{
    res.sendFile(path.join(process.cwd(), 'html/results.html'));
})



module.exports = router