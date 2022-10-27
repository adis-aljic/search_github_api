const express  = require("express");
const app = express();
app.use(express.json());
app.use(express.static(__dirname));
const find_router = require("./router/find")
const PORT = 3000;

app.listen(PORT,()=>console.log(`Server listening at port ${PORT}`))


app.use("/",find_router)