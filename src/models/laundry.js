const mongoose=require("mongoose");
const laundryschema=new mongoose.Schema({
    email : {
        type:String
    },

    text : {
        type:String
    },
    tshirt :{
        type:String
    },
    pant : {
        type:String
    },
    towel : {
        type:String
    },
});
const Laundry=new mongoose.model("Laundry",laundryschema);
module.exports=Laundry;