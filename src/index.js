import React from "react";
import { render } from 'react-dom';
import MyAttrMulti from './MyAttrMulti';

const data = {
    name: 'あめりけん権左衛門',
    age: 18,
    sex: '男',
};

render(
    <MyAttrMulti{...data} />,
    document.getElementById('root'))