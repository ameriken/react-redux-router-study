import React from "react";
import { render } from 'react-dom';
import MyHello from './MyHello'

render(
    <MyHello name={'ameriken'} />,
    document.getElementById('root')
);