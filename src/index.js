import React from "react";
import { render }from "react-dom";

import { createStore, applyMiddleware } from "redux";

import { Provider } from "react-redux"
import  App  from './containers/App';
import rootReducers from "./reducers";

import thunk from "redux-thunk";

const middleWares = [thunk];

//複数使える場合に備えて「...」としてる
const store = createStore(rootReducers, applyMiddleware(...middleWares));


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
