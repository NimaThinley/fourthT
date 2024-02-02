const http = require('http');
const fs = require('fs');
const PORT = process.env.PORT;


const handle = (FileName, statustCode, req, res) => {
    fs.readFile(FileName, "utf-8",
    (err, data) => { 
        if (err){
            console.log(err);
        }else{
            res.writeHead (200 , {
                "content-type" : "text/html"
            });
            res.write(data);
        }

    }
    )
}



const server = http.createServer((req, res) => {
   if(req.url === "home"){
  handle("index.html", 200, req, res);
    
   }else if (req.url === "about"){
    handle("about.html", 200, req, res);
   }
   else if (req.url === "about"){
    handle("service.html", 200, req, res);
   }
   
   else if (req.url === "contact"){
    handle("contact.html", 200, req, res);
   }
   else{
    handle("404.html", 200, req, res);
}

});
server.listen(PORT, () => {
    console.log(`server is running`)
});