const http = require("http")
const PORT = 3000;

const server = http.createServer((req,res) => {
    res.writeHead(200);
    res.end("Hello from the server, Tharanithar!!");
});

server.listen(PORT, "0.0.0.0", () =>{
    console.log(`SERVER is running on ${PORT}`);
});

