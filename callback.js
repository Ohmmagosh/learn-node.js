//ทบมวน callback function

function calculate(x,y,callback){
    console.log("กำลังคำนวณ...")
    setTimeout(()=>{
        const sum = x+y
        callback(sum)
    },3000)
}

// function display(result){
//     console.log(`ผลบวก = ${result}`)
// }

// const sum = calculate(100,50)
// display(sum)

//ฟังก์ชั่นแบบ callback

calculate(100,50,function(result){
    console.log(`ผลบวก = ${result}`)
})