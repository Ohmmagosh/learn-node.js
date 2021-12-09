//จัดการ Routing
const express = require('express')
const router = express.Router()
const path = require('path')


router.get("/",(req,res)=>{
    res.status
    res.type('text/html')
    res.sendFile(path.join(__dirname,"../webplate/index.html"))
})

router.get("/product/:id",(req,res)=>{
    // res.sendFile(path.join(__dirname,"../webplate/product1.html"))
    const productId = req.params.id
    if(productId === "1"){
        res.sendFile(path.join(__dirname,"../webplate/product1.html"))
    }else if(productId === "2"){
        res.sendFile(path.join(__dirname,"../webplate/product2.html"))
    }else if(productId === "3"){
        res.sendFile(path.join(__dirname,"../webplate/product3.html"))
    }else{
        res.redirect("/")
    }
        
})

module.exports = router