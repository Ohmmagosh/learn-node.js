//Async & await

const connect = true
const url1 = "ohm.dev/file1.json"
const url2 = "ohm.dev/file2.json"
const url3 = "ohm.dev/file3.json"
const url4 = "ohm.dev/file4.json"
const url5 = "ohm.dev/file5.json"

function downloading(url){
    return new Promise(function(resolve,reject){
        console.log(`กำลังโหลดไฟล์จาก ${url}` )
        setTimeout(()=>{
           if(connect){
               resolve(`โหลด ${url} เรียบร้อย`)
           }else{
               reject('เกิดข้อผิดพลาด')
           }
       },1000)
    })
}

async function  start(){
    console.log(await downloading(url1))
    console.log(await downloading(url2))
    console.log(await downloading(url3))
    console.log(await downloading(url4))
    console.log(await downloading(url5))
}
start()

//api ภาพสินค้า (backend) -> frontend (แสดงภาพในเว็บ)

//api (promise) -> (pending) -> รอข้อมูลมาครบ (await) -> แสดงภาพ

// loading..... -> แสดงภาพ