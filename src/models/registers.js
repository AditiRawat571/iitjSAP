const mongoose=require("mongoose");
const nameschema=new mongoose.Schema({
    email :{
        type:String,
        required:true
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
    cpassword :{
        type:String,
        required:true
    },
    password :{
        type:String,
        required:true
    },
   
})
const Register=new mongoose.model("IITJstudent",nameschema);
module.exports=Register;