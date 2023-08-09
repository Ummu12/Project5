const express = require("express")


const app= express()

app.get("/" ,(req,res)=>{
    res.send("App here")

})

app.get("/animal",(req,res)=>{

    res.send("Animal lives here")
})

app.get("/city",(req,res)=>{

    res.send("I am from Buldana")

})

app.get("/product",(req,res)=>{
    res.send("74 inches TV")
})

app.get("/dept",(req,res)=>{
    
  res.send("Mechanical")
})


app.listen(5050,()=>{

 console.log("Server is working on 5050..")

})