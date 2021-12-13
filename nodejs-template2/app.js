const express = require('express')
const path = require('path')
const router = require('./routes/myrouter')
const app = express()

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(router)
app.use(express.static(path.join(__dirname,'public')))


app.listen(3000,'localhost',()=>{
    console.log("start server in port 3000");
})