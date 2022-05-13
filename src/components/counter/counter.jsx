import { useContext } from "react";
import { CounterContext } from "../../context/counter.context";
import CounterClone from "./counter-clone";

const Counter = () => {
  const { count } = useContext(CounterContext);
  return (
    <div style={{ display: "flex" }}>
      <h1>{count}</h1>
      <CounterClone />
    </div>
  );
};

export default Counter;
