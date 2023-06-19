const mongoose=require("mongoose");
const notesschema=new mongoose.Schema({
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
    },
    age:{
        type:Number,
    },
    text:{
        type:String,
    }
   
})
const Notes=new mongoose.model("Phc",notesschema);
module.exports=Notes;