//นิยมเขียนแบบนี้มากกว่า import เข้ามาแค่ครั้งเดียว
const util = require('./mymodules') 
const now = require('./mymodules').getCurrentTime
const plus = require('./mymodules').add

const number = 5000000000

console.log(util.formatchNumber(number))

console.log(now())
console.log(plus(10,5))
console.log(util.getCurrentTime())
console.log(util.add(100,30))