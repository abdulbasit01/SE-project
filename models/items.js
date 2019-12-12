const mongoose = require("mongoose");
const Schema=mongoose.Schema;
const schemaItem=new Schema({
    name:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
module.exports=items=mongoose.model('item',schemaItem);