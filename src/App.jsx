import { useState } from "react";
import Counter from "./components/counter/counter";
import Button from "./components/button/button";
import { CounterContext } from "./context/counter.context";

import "./App.css";

const App = () => {
  const [count, setCount] = useState(10);
  const [countClone, setCountClone] = useState(0);

  const dispatchCounterEvent = (actionType) => {
    switch (actionType) {
      case "INCREMENT":
        setCount(count + 1);
        setCountClone(countClone + 1);
        return;
      case "DECREMENT":
        setCount(count - 1);
        setCountClone(countClone - 1);
        return;
      default:
        console.log("event default");
        return;
    }
  };

  return (
    <CounterContext.Provider
      value={{ count, countClone, dispatchCounterEvent }}
    >
      <div className="App">
        <Counter />
        <div style={{ display: "flex" }}>
          <Button label="Incrementar" actionType="INCREMENT" />
          <Button label="Decrementar" actionType="DECREMENT" />
        </div>
        <p>Hola mundo</p>
      </div>
    </CounterContext.Provider>
  );
};

export default App;
