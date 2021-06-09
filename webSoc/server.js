import WebSocket from "ws";
import ip from "ip";
import fs from "fs"

const wss = new WebSocket.Server({ port: 8282 });


console.dir(ip.address());
wss.on("connection", (ws) => {
  console.log("connected ~ ");

  ws.on("message", (data) => {
    console.log("data: ", data);    
    fs.writeFile('../../../dummy_response.json', data,  function(error){ console.log('write end') });
  });

  ws.on("close", (ws) => {
    console.log("closed");
  });
});
