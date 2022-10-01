import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, inc5, dec5 } from "./redux/actions";

const Counter = () => {
  const count = useSelector((store) => store.counter);
  const count5 = useSelector((store) => store.counter5);
  const dispatch = useDispatch();

  const handleInc = () => {
    dispatch(increment());
  };
  const handleDec = () => {
    dispatch(decrement());
  };
  const handleInc5 = () => {
    dispatch(inc5());
  };
  const handleDec5 = () => {
    dispatch(dec5());
  };

  return (
    <div>
      Count____{count}
      <br />
      <button onClick={handleInc}>artir</button>
      <button onClick={handleDec}>azalt</button>
      <br />
      Count 5 step____{count5}
      <br />
      <button onClick={handleInc5}>5 artir</button>
      <button onClick={handleDec5}>5 azalt</button>
    </div>
  );
};

export default Counter;
