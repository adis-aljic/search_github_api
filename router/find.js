const express = require("express")
const router = express.Router();
const path = require("path")
const fetch_results = require("../js/fetch")
const urlencodedParser = bodyParser.urlencoded({ extended: true })
router.use(bodyParser.json());   
router.get("/",(req,res)=>{
    res.sendFile(path.join(process.cwd(), 'html/index.html'));
})

router.post("/finduser" ,urlencodedParser,(req,res)=>{
    fetch_results.fetch(req.body.search)
    res.sendFile(path.join(process.cwd(), 'html/results.html'));

})


module.exports = router