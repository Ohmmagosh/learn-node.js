const http = require('http')

const sever = http.createServer(function(res,res){
    res.write("hello node.js by Ohmaaagoch")
    res.end()
})

sever.listen(3000)