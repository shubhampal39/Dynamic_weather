const express=require('express');
const app = express();
const port=process.env.PORT ||3000;

app.get("",(req,res) => {
    res.send("Welcome to shubham pal");
})

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