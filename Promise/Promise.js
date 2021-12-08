//สร้าง Promise

const connect = true
const url1 = "ohm.dev/file1.json"
const url2 = "ohm.dev/file2.json"
const url3 = "ohm.dev/file3.json"
const url4 = "ohm.dev/file4.json"
const url5 = "ohm.dev/file5.json"

// function downloading(url){
//     return new Promise(function(resolve,reject){
//         if(connect){
//             console.log(`โหลด ${url} เรียบร้อย`)
//         }else{
//             console.log("เกิดข้อผิดพลาด")
//         }
//     })
// }
// function downloading1(url){
//     return new Promise(function(resolve,reject){
//         if(connect){
//             resolve(`โหลด ${url} เรียบร้อย`)
//         }else{
//             reject("เกิดข้อผิดพลาด")
//         }
//     })
// }
// function downloading2(url){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             if(connect){
//                 resolve(`โหลด ${url} เรียบร้อย`)
//             }else{
//                 reject('เกิดข้อผิดพลาด')
//             }
//         },1000)
//     })
// }
function downloading(url){
    return new Promise(function(resolve,reject){
       console.log(`กำลังโหลดไฟล์จาก ${url}` )
        setTimeout(()=>{
           if(connect){
               resolve(`โหลด ${url} เรียบร้อย`)
           }else{
               reject('เกิดข้อผิดพลาด')
           }
       },3000)
    })
}

// downloading(url1)
//promise hell
// downloading(url1).then(function(result){
//     console.log(result)
//     downloading(url2).then(function(result){
//         console.log(result)
//         downloading(url3).then(function(result){
//             console.log(result)
//             downloading(url4).then(function(result){
//                 console.log(result)
//                 downloading(url5).then(function(result){
//                     console.log(result)
//                 })
//             })
//         })
//     })
// })
downloading(url1).then(function(result){
    console.log(result)
    return downloading(url2)
}).then(function(result){
    console.log(result)
    return downloading(url3)
}).then(function(result){
    console.log(result)
    return downloading(url4)
}).then(function(result){
    console.log(result)
    return downloading(url5)
}).then(function(result){
    console.log(result)
})