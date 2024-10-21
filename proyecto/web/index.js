const express = require("express");
const bodyparser = require("body-parser")
const cors = require("cors");
const path = require('path')


const app = express()
const port = 3001

app.use(express.static(path.join(__dirname,"..", 'web')))

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors())


app.get("/mens", (req,res)=>{
    res.send("Servidro funcionando")
}) 

app.post("/guardar",(req,res)=>{
    try {
        //const {nombre}=req.body;
        console.log(req.body);
        
    } catch (error) {
        console.log(error.message);
        
    }
    //console.log(req.body);
    
})  

app.listen(port,()=>{
    console.log("Servidor ejecutado en puerto 3001");
    
});