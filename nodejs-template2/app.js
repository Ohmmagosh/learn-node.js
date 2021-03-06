const cookieParser = require('cookie-parser')
const express = require('express')
const session = require('express-session')
const path = require('path')
const router = require('./routes/myrouter')
const app = express()


app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.use(cookieParser())
app.use(express.urlencoded({extended:false}))
app.use(session({secret:"mysession",resave:false,saveUninitialized:false}))
app.use(router)
app.use(express.static(path.join(__dirname,'public')))


app.listen(8080,'localhost',()=>{
    console.log("start server in port 8080");
})