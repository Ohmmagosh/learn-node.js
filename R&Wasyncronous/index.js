//Non-blocking
const fs = require('fs')

//อ่านไฟล์ input.txt
fs.readFile('./R&Wasyncronous/input.txt','utf8',(err,data)=>{
    if(err) return console.log("เกิดข้อผิดพลาด",err)
    const outputText = `Hello Node.js \n${data}\n ไฟล์นี้ถูกเขียนเมื่อ ${new Date()}`
    fs.writeFile('./R&Wasyncronous/output.txt',outputText,err=>{
        if(err) return console.log("เกิดข้อผิดพลาด",err)
        console.log("เขียนไฟล์เรียบร้อย")
    })
})

console.log("จบการทำงาน")