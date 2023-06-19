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
    email:{
        type:String,
    },
    link:{
        type:String,
    }
   
})
const Notes=new mongoose.model("Note",notesschema);
module.exports=Notes;