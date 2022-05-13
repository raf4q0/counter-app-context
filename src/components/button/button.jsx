import { useContext } from "react";
import { CounterContext } from "../../context/counter.context";

const Button = ({ label, actionType }) => {
  const { dispatchCounterEvent } = useContext(CounterContext);
  return (
    <button onClick={() => dispatchCounterEvent(actionType)}>{label}</button>
  );
};

export default Button;
