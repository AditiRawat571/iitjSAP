const mongoose=require("mongoose");
const itemschema=new mongoose.Schema({
    fname :{
        type:String
    },
    lname :{
        type:String
    },
    email : {
        type:String
    },

    item : {
        type:String
    },
    link : {
        type:String
    },
    price:{
       type:String
    }
});
const items=new mongoose.model("Item",itemschema);
module.exports=items;