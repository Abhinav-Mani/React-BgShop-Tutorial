const   express = require("express"),
        app=express();

app.get("/",(req,res)=>{
    res.send("hello");
})
app.listen(2303,()=>{
    console.log("listening at 2303");
})
