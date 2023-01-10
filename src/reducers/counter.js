const counterReducer = (state = 10, action) => {
   switch (action.type) {
      case "COUNTER/INCREMENT":
         return state + 1;

      case "COUNTER/DECREMENT":
         return state - 1;

      case "COUNTER/INCREMENTBY":
         return state + action.payload;

      default:
         return state;
   }
};

export default counterReducer;
