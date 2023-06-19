const mongoose=require("mongoose");
const messageschema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    fname :{
        type:String,
        required:true
    },
    lname :{
        type:String,
        required:true
    },
    roll :{
        type:String,
        required:true
    },
    text :{
        type:String,
        required:true
    }
    
    
})
const message=new mongoose.model("Feedback",messageschema);
module.exports=message;
