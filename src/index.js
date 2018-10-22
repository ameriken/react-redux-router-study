import React from "react";
import { render } from 'react-dom';
//import MyProp,{Member} from "./MyProp";
import MyProp from "./MyProp";

render(
    //正しい例
    /*<MyProp prop1={new Member()} />,*/
    //ダメな例
    <MyProp prop1={"hoge"} />,
    document.getElementById('root')
);