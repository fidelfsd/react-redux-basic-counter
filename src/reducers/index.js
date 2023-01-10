import counterReducer from "./counter";
import counter2Reducer from "./counter2";

import { combineReducers } from "redux";

const allReducers = combineReducers({
   counter: counterReducer,
   counter2: counter2Reducer,
});

export default allReducers;
