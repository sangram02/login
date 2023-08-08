require('dotenv').config();
const express = require('express');
const path = require("path");
const app = express();
const hbs = require("hbs");


require("./db/conn")
const Register = require("./models/registers")
hbs.registerPartials(path.join(__dirname, "../src/templates/partials"));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

const port = process.env.PORT || 3000;
const temp_path = path.join(__dirname,"../src/templates/views");

app.use(express.static(path.join(__dirname,"../Public")))
app.set("view engine", "hbs")
app.set("views" , temp_path);

app.get("/",(req,res)=>{
    res.render("index")
})
app.post("/",async(req,res)=>{
    try{
        const registeremp = new Register({
            username : req.body.username,
            email : req.body.email,
            password : req.body.password                     
        })
        const registered = await registeremp.save();
        res.status(201).render("index")
    }
    catch(e){
        res.status(404).send(e);
    }
})
app.listen(port , ()=>{
    console.log(`server is running at ${port}`);
})