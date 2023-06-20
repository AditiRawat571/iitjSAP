const express=require("express");
const mongoose=require("mongoose");
const ejs=require("ejs");

const app = express();
const path=require("path");
require("./db/connect-db");

const Register=require("./models/registers.js");
const Notes=require("./models/notes-b.js");
const items=require("./models/items.js");
const Message=require("./models/message.js")
const Laundry=require("./models/laundry.js")
const Phc=require("./models/phc.js")
const port =process.env.PORT || 3000;

const static_path=path.join(__dirname,"../public");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));
app.set("view engine","ejs");


app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/login",(req,res)=>{
    res.render("login");
})

app.post("/login",async(req,res)=>{
try {
  
    const newstudent= new Register({
        email : req.body.email,
        fname : req.body.fname,
        lname : req.body.lname,
        roll : req.body.roll,
        password :req.body.pswd,
        cpassword :req.body.cpswd
      })
      const password=req.body.pswd;
      const cpassword=req.body.cpswd;
      if(password===cpassword){
        const registered =await newstudent.save();
        res.end("Your form has been submitted");
      }
      
      else{
        res.end("Password not matching");
      }
      

} catch (error) {
    res.status(400).send(error);
}
})


/*......................................*/
app.get("/index",(req,res)=>{
    res.render("index");
})

app.get("/notes",(req,res)=>{
    res.render("notes");
})
app.post("/notes",async(req,res)=>{
    try {
        const newnotes= new Notes({
            email : req.body.email,
            fname : req.body.fname,
            lname : req.body.lname,
            roll : req.body.roll,
            link :req.body.dlink
          })
          const reg =await newnotes.save();
        res.end("Your form has been submitted");

    } catch (error) {
        res.status(400).send(error);
    }
    })
app.post("/First-year",async(req,res)=>{
    try {
        
    
        const email=req.body.email;
        const password=req.body.pswd;
        //console.log(`${email}and${password}`);
        const verify=await Register.findOne({email:email});
        if(verify==null)
        res.end("Wrong Email");
        if(verify.password===password)
         res.render("First-year");
         else
         res.end("Password not matching");
     
    
    } catch (error) {
        res.status(400).send(error);
    }
    })

    /*...................................*/
    app.get("/olx",(req,res)=>{
        res.render("olx");
    })
    app.post("/olx",async(req,res)=>{
        try {
            
        
            const email=req.body.email;
            const password=req.body.pswd;
            //console.log(`${email}and${password}`);
            const verify=await Register.findOne({email:email});
            console.log(verify.password);
            if(verify==null)
            res.end("Wrong Email");
            if(verify.password===password)
             res.render("buy-sell",{details:verify});
             else
             res.end("Password not matching");
         
        
        } catch (error) {
            res.status(400).send(error);
        }
        })
app.post("/buy-sell",async(req,res)=>{
    try {
        const itemdetails=new items({
            fname:req.body.fname,
            lname:req.body.lname,
            email:req.body.email,
            link:req.body.link,
            item:req.body.item,
            price:req.body.price,
        })
        const added=await itemdetails.save();
        res.end("Your item has been added to database");
    } catch (error) {
        console.log(error);
    }
})

app.post("/buy",async(req,res)=>{
    try {
        const item=req.body.item;
        const details=await items.find({item:item});
        console.log(details);
        //const details=await items.find({item:item});
        res.render("buy",{obj:details});
    } catch (error) {
        console.log(error);
    }
})

/************************************************************************* */
app.get("/contact",(req,res)=>{
    res.render("contact");
})
app.post("/contact",async(req,res)=>{
    try {
        const newmessage=new Message({
            fname:req.body.fname,
            lname:req.body.lname,
            roll:req.body.roll,
            email:req.body.email,
            text:req.body.text,
        })
        const done = await newmessage.save();
        res.send("Feedback submitted");
    } catch (error) {
       console.log(errror);   
    }
})


/********************************************************************************* */
app.get("/laundry",(req,res)=>{
    res.render("laundry");
})
app.post("/laundry",async(req,res)=>{
    try {
        const email=req.body.email;
        const text=req.body.text;
        const ln=await Laundry.findOne({email:email});
        console.log(ln);
        if(ln!=null){
            if(ln.text===text){
                res.render("ld",{element:ln});
            }
            else{
                res.send("Wrong Laundry Number");
            }
        }
        else{
            res.send("Email not registered");
        }
        

    } catch (error) {
        console.log(error);
    }
})
/************************************************************************************ */
app.get("/phc",(req,res)=>{
    res.render("phc");
})
app.post("/phc",async(req,res)=>{
    try {
        const newmessage=new Phc({
            fname:req.body.fname,
            lname:req.body.lname,
            roll:req.body.roll,
            age:req.body.age,
            text:req.body.text,
        })
        const done = await newmessage.save();
        res.send("Response send");
    } catch (error) {
       console.log(errror);   
    }
})
/************************************************************************************ */
app.listen(port,()=>{
    console.log("LIS");
})


