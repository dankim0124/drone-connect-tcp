import WebSocket from "ws";
import ip from "ip";

const wss = new WebSocket.Server({ port: 8282 });


console.dir(ip.address());
wss.on("connection", (ws) => {
  console.log("connected ~ ");

  ws.on("message", (data) => {
    data = JSON.parse(data);
    console.log("data: ", data);
    let fileLoc = __dirname + "../drone-updated.txt";
    fs.write(fileLoc, data, (error) => {
      if (error) {
        console.log(error);
      }
      console.log(" I write file");
    });
  });

  ws.on("close", (ws) => {
    console.log("closed");
  });
});
