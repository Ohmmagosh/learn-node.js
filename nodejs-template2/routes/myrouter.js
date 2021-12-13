//จัดการ Routing
const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    const name = "Ohmaaagoch"
    const age = 23
    const address = "<h2>bangkok</h2>"
    const products = ["เสื้อ","พัดลม","ทีวี","ตู้เย็น","ผ้าม่าน","บ้านเด็ก","ชั้นเหล็กเก็บของ","แอร์"]
    const products2 = [
        {name:"Notebook",price:25000,image:"./images/products/product1.png"},
        {name:"เสื้อ",price:2000,image:"./images/products/product2.png"},
        {name:"หูฟัง",price:2500,image:"./images/products/product3.png"}
    ]
    res.render('index',{data:name, age:age, address:address, products:products,products2:products2})
})
router.get('/form',(req,res)=>{
    res.render('form')
})
router.get('/manage',(req,res)=>{
    res.render('manage')
})
router.post('/insert',(req,res)=>{
    console.log(req.body);
    res.render('form')
})


module.exports = router