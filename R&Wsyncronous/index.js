//Blocking
const fs = require('fs');

//อ่านไฟล์ input.txt
 const data = fs.readFileSync('./R&Wsyncronous/myfile/input.txt','utf8');

console.log(data)
console.log("จบการทำงาน")

//เขียนไฟล์
const outputText = `hello node.js\n${data}ไฟล์ถูกเขียนเมื่อ ${new Date()}`
fs.writeFileSync('R&Wsyncronous/myfile/output.txt',outputText)