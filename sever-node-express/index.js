const express = require('express')
const router =require('./routes/myrouter.js')
const app = express()

//อ้างอิงตำแหน่งไฟล์

// const indexPage = path.join(__dirname,"/webplate/index.html")

app.use(router)

app.listen(3000,'localhost',()=>{
    console.log("start server in port 3000");
})

