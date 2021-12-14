//จัดการ Routing
const express = require('express')
const Product = require('../model/product')
const router = express.Router()

//อัพโหลดไฟล์
const multer = require('multer')

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/images/products')// ตำแหน่งจัดเก็บไฟล์
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+".jpg")//เปลี่ยนชื่อไฟล์เพื่อป้องกันไม่ให้ซ้ำกัน
    }
})

const upload = multer({
    storage:storage
})

router.get('/',(req,res)=>{
   Product.find().exec((err,doc)=>{
       res.render('index',{product:doc})
   })
})
router.get('/form',(req,res)=>{
    res.render('form')
})
router.get('/manage',(req,res)=>{
    Product.find().exec((err,doc)=>{
        res.render('manage',{product:doc})
    })
})
router.post('/insert',upload.single('image'),(req,res)=>{
    let data = new Product({
        name:req.body.name,
        price:req.body.price,
        image:req.file.filename,
        description:req.body.description
    })
    Product.saveProduct(data,(err)=>{
        if(err) console.log(err)
        res.redirect('/')
    })
})


module.exports = router