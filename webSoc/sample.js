import http from "http";

const hostname = 'localhost';

const port = 3000;



http.createServer((req,res)=>{

res.write('<h1>Hello Node!</h1>');

res.end('<p>Hello Server!</p>');

}).listen(port,hostname,()=>{

console.log(`Server running at http://${hostname}:${port}`);

})

