import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment2, decrement2 } from "../../actions";

export default function Counter2() {
   const counter2State = useSelector((state) => state.counter2);
   const distpach = useDispatch();

   return (
      <div>
         <h2>Counter_2: {counter2State}</h2>
         <button onClick={() => distpach(increment2())}>+</button>
         <button onClick={() => distpach(decrement2())}>-</button>
      </div>
   );
}
