import React from "react";
import { render } from 'react-dom';
import MyHelloContent from "./MyHelloContent";

render(
    <MyHelloContent>
        <b>山田</b>
    </MyHelloContent>,
    document.getElementById('root')
);