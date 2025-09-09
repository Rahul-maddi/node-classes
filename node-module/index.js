const http = require("http")

const server = http.createServer((req,res)=>{
    if(req.url==="/" && req.method=="GET"){
        res.writeHead(200);
        res.write("iam server running healthy")
        return res.end();
    }
    
    res.writeHead(200)
    res.write("hai iam http server");
    res.end();    
})
server.listen(4000,()=>{
    console.log("server started");
    
})