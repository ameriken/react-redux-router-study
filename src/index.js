import { createStore } from "redux";
import reducer from "./reducer"

const store = createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({type:"MINUS", payload: {num: 5}});
store.dispatch({type:"PLUS", payload: {num: 10}});
