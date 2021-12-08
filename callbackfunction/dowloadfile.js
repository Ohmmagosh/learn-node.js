//เขียนโปรแกรมดาวน์โหลดไฟล์

const url1="ohm.dev/file1.json"
const url2="ohm.dev/file2.json"
const url3="ohm.dev/file3.json"
const url4="ohm.dev/file4.json"

function downloading(url,callback){
    console.log(`กำลังดาวโหลด ${url}`)
    setTimeout(()=>{
        callback(url)
    },1000)
}

// function complete(result){
//     console.log(`ดาวน์โหลด ${result} เรียบร้อย!`)
// }
//ลดรูป
// callback hell
downloading(url1,function(result){
    console.log(`ดาวน์โหลด ${result} เรียบร้อย!`)
    downloading(url2,function(result){
        console.log(`ดาวน์โหลด ${result} เรียบร้อย!`)
        downloading(url3,function(result){
            console.log(`ดาวน์โหลด ${result} เรียบร้อย!`)
            downloading(url4,function(result){
                console.log(`ดาวน์โหลด ${result} เรียบร้อย!`)
            })
        })
    })
})
