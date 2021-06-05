import WebSocket from "ws";

const wss = new WebSocket.Server({port:8282});

console.log("run server : commit - m 'add real ip address'");
wss.on("connection", ws=>{
    console.log("connected ~ ")

    ws.on("message",data =>{
        data = JSON.parse(data);
        console.log("data: " ,data);
    })


    ws.on("close",ws=>{
        console.log("closed");
    })
})