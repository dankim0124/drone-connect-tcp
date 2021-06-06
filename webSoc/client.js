import WebSocket from "ws";

const wsc = new WebSocket("ws://175.123.206.100:8282/websocket");

const speed = 1
const speed2 = 2

//175.123.206.100:8282
//192.168.1.192:8282

wsc.addEventListener("open",()=>{
    console.log("connected to server")
    const data = JSON.stringify({key1:1,key2:2});
    wsc.send(data);
}
)