import { useEffect, useState } from "react";
import { Input, Button } from "antd";
import styled from "styled-components";

import logo from "./drone2.png";
import "./App.css";


const App = () => {
  useEffect(() => {
    console.log("web opened ! ");
  }, []);

  const [IP, setIP] = useState();
  const [speed, setSpeed] = useState();
  const [time, setTime] = useState();

  const handleIPChanged = (e) => {
    setIP(e.target.value);
  };

  const handleTimeChanged = (e) => {
    setTime(e.target.value);
  };

  const handleSpeedChanged = (e) => {
    setSpeed(e.target.value);
  };

  const handleClick = (e) => {
    console.log(speed, " & ", IP);
    callServer(speed, IP,time);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Drone Connector</h2>
        <InputContainer>
          <InputLine>
            <span>Ip address: </span>
            <span>&#9;</span>
            <Input
              placeholder="17x.xxx.2xx.1xx:82xx"
              value={IP}
              onChange={handleIPChanged}
            />
          </InputLine>

          <InputLine>
            <span>speed: </span>
            <span>&#9;</span>
            <Input value={speed} onChange={handleSpeedChanged} />
          </InputLine>

          <InputLine>
            <span>Time: </span>
            <span>&#9;</span>
            <Input value={time} onChange={handleTimeChanged} />
          </InputLine>
        </InputContainer>

        <Button onClick={handleClick}>Submit</Button>
      </header>
    </div>
  );
};

const callServer = (speed, IP, time) => {
  const wsc = new WebSocket("ws://" + IP+ ":8282");
  console.log("try to connect ..... to ws://"+ IP +":8282");

  wsc.addEventListener("open", () => {
    console.log("connected to server");
    const data = JSON.stringify({ speed: speed, IP: IP, time: time });
    wsc.send(data);
  });
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputLine = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  justify-content: space-around;
  margin: 15px;
`;

export default App;
