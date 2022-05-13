import { useState } from "react";
import Counter from "./components/counter/counter";
import Button from "./components/button/button";
// import logo from './logo.svg'
import "./App.css";

const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Counter />
      <div style={{ display: "flex" }}>
        <Button label="Incrementar" />
        <Button label="Decrementar" />
      </div>
    </div>
  );
};

export default App;
