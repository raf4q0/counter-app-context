import { useContext } from "react";
import { CounterContext } from "../../context/counter.context";

const CounterClone = () => {
  const { countClone } = useContext(CounterContext);
  return <h1 style={{ color: "red" }}>{countClone}</h1>;
};

export default CounterClone;
