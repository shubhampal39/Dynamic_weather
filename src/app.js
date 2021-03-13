const express=require('express');
const app = express();
const path=require('path');
const port=process.env.PORT ||3000;

const static_path =(path.join(__dirname,'../public'));


app.use(express.static(static_path));


app.get("/about",(req,res) => {
    res.send("Welcome to about");
})

app.get("/weather",(req,res) => {
    res.send("Welcome to weather");
})

app.get("**",(req,res) => {
    res.send("Welcome to 404");
})

app.listen(port,()=>{
  console.log(`Listening on ${port}`)
});