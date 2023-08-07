const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/form").then(()=>{
    console.log(`connection succesful`);
}).catch((e)=>{
    console.log(`no connection`);
})