import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/actions";

export default function Counter() {
  const count = useSelector((store) => store);
  const dispatch = useDispatch();

  const handleInc = () => {
    dispatch(increment());
  };
  const handleDec = () => {
    dispatch(decrement());
  };

  return (
    <div>
      Counter______{count}
      <br />
      <button onClick={handleInc}>Artir</button>
      <button onClick={handleDec}>Azalt</button>
    </div>
  );
}
