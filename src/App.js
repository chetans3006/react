import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/greet";
import Welcome from "./components/welcome";
import Hello from "./components/hello";
import { Component } from "react";
import Message from "./components/message";
import Counter from "./components/counter";
import FunctionClick from "./components/functionclick";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FunctionClick />
        {/* 
        <Greet name="chetan " heroname="batman">
          <p>This is children props</p>
        </Greet>
        <Greet name="kallu" heroname="superman">
          <button>Click Me</button>
        </Greet>
        <Greet name="banga" heroname="spiderman" />
        <Welcome name="sehaj" heroname="lalit" />
        <Welcome name="santu" heroname="kalu" />
        <Welcome name="syal" heroname="popla" />
        <Hello />
        <Message />
        <Counter />
        */}
      </div>
    );
  }
}

export default App;
