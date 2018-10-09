import React from "react";
import { render } from 'react-dom';


function name1() {
    console.log('nanan');
}

const name2 = () => {
    console.log('name2');
}

name1();
name2();

const name3 = (val) => {
    console.log(val);
}

name3('name3')

const name4 = val => {
    console.log(val);
}

name4('name4')

const name5 = (val1,val2) => {
    console.log(val1, val2);
}

name5('arg1','arg2');

const name6 = () => {
    return 'name6';
}

console.log(name6());

const name7 = () => 'name7';

console.log(name7())

const name8 = () => console.log('name8');

name8();
