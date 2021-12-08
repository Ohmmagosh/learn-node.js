//ให้บริการเกี่ยวกับก่ีทำงานต่างๆในโปรเจค


const getCurrentTime = (()=>new Date)

// function getCurrentTime(){
//     return new Date()
// }

const add = ((x,y)=>x+y)

const formatchNumber=((num)=>num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'))

module.exports.getCurrentTime = getCurrentTime
module.exports.add = add
module.exports.formatchNumber = formatchNumber
