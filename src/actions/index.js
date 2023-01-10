// counter
export const increment = () => {
   return {
      type: "COUNTER/INCREMENT",
   };
};

export const decrement = () => {
   return {
      type: "COUNTER/DECREMENT",
   };
};

export const incrementBy = (value) => {
   return {
      type: "COUNTER/INCREMENTBY",
      payload: value,
   };
};

// counter 2
export const increment2 = () => {
   return {
      type: "COUNTER2/INCREMENT",
   };
};

export const decrement2 = () => {
   return {
      type: "COUNTER2/DECREMENT",
   };
};
