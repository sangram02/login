const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://sangramkumar:Virat18@cluster0.w4depya.mongodb.net/registers?retryWrites=true&w=majority").then(()=>{
    console.log(`connection succesful`);
}).catch((e)=>{
    console.log(`no connection`);
})