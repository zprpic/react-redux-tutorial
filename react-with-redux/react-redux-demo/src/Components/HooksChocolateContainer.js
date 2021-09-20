import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyChocolate } from "../redux/";

function HooksChocolateContainer() {
  const numberOfChocolates = useSelector((state) => {
    return state.chocolate.numberOfChocolates;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Chocolates {numberOfChocolates}</h2>
      <button onClick={() => dispatch(buyChocolate())}>Buy Chocolate</button>
    </div>
  );
}

export default HooksChocolateContainer;
