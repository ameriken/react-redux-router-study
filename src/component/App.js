import React from "react";

const App = ({day,title,number,plus,minus,asyncMinus, getJson}) => (
    <div>
        <h2>{title} {number} {day} </h2>
        <button
            onClick={()=>{
                plus(10);
            }}
        >
            + 10
        </button>

        <button
            onClick={()=>{
                minus(10);
            }}
        >
            - 10
        </button>
        <button
            onClick={()=>{
                asyncMinus(10);
            }}
        >
            - 10
        </button>
        <button
            onClick={()=>{
                getJson();
            }}
        >
            getJson
        </button>
    </div>
);

export default App;
