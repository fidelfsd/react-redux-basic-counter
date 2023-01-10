import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementBy } from "../../actions";

export default function Counter() {
   const counterState = useSelector((state) => state.counter);
   const dispatch = useDispatch();

   return (
      <div>
         <h2>Counter: {counterState}</h2>

         <button onClick={() => dispatch(increment())}>+</button>
         <button onClick={() => dispatch(decrement())}>-</button>
         <button onClick={() => dispatch(incrementBy(100))}>
            Increment by 100
         </button>
      </div>
   );
}
