const mongoose=require("mongoose")

const newSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    allergies:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("Cartusers",newSchema) //cartusers is tablename

module.exports=collection