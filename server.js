const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const items=require("./routes/api/item");
const app=express();
app.use(bodyParser.json()); 
//DB config
const db=require('./config/keys.js').mongoURI;
mongoose.connect(db)
    .then(()=>{
        console.log("Mongoose Connected.....")
    })
    .catch(err=>{
        console.log(err)
    })
app.use('./api/item',items);
const port=process.env.PORT || 5000;
app.listen(port, ()=>{console.log("server started")})
