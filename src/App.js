import { useEffect, useState } from "react";
import { Input, Button, Space } from "antd";
import styled from "styled-components";

import logo from "./drone2.png";
import "./App.css";

const tab = <span class="tab">&#9;</span>;

const App = () => {
  useEffect(() => {
    console.log("web opened ! ");
    callServer();
  }, []);

  const [IP, setIP] = useState();
  const [speed, setSpeed] = useState();

  const handleIPChanged = (e) => {
    setIP(e.target.value)
  };

  const handleSpeedChanged = (e) => {
    setSpeed(e.target.value)
  };

  const handleClick = (e) =>{
    console.log( speed, " & ", IP)
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Drone Connector</h2>
        <InputContainer>
          <InputLine>
            <span>Ip address: </span>
            <tab />
            <Input placeholder="17x.xxx.2xx.1xx:82xx"
            value = {IP}
            onChange = {handleIPChanged} />
          </InputLine>
          <InputLine>
            <span>speed: </span>
            <tab />
            <Input value = {speed} onChange = {(e) =>handleSpeedChanged(e)} />
          </InputLine>
        </InputContainer>

        <Button onClick = {handleClick}>Submit</Button>
      </header>
    </div>
  );
};

const callServer = () => {
  const wsc = new WebSocket("ws://175.123.206.100:8282");
  console.log("try to connect ..... to ws://175.123.206.100:8282");

  wsc.addEventListener("open", () => {
    console.log("connected to server");
    const data = JSON.stringify({ key1: 1, key2: 2 });
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
