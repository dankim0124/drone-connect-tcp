import {useEffect} from "react";
import logo from "./logo.svg";
import "./App.css";


function App() {
  useEffect(()=>{
    console.log("web opened ! ");
    callServer()
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const callServer = () => {
  const wsc = new WebSocket("ws://localhost:8282");

  console.log("try to connect .....");

  wsc.addEventListener("open", () => {
    console.log("connected to server");
    const data = JSON.stringify({ key1: 1, key2: 2 });
    wsc.send(data);
  });
};

export default App;
