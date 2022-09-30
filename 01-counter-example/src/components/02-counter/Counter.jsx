import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/actions";

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((store) => store);
  const handleInc = () => {
    dispatch(increment());
  };
  const handleDec = () => {
    dispatch(decrement());
  };
  return (
    <div>
      Counter____{count}
      <br />
      <button onClick={handleInc}>Artir</button>
      <button onClick={handleDec}>Azalt</button>
    </div>
  );
}
