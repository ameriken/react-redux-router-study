import React from "react";
import { render } from 'react-dom';

// 冒頭大文字にする
//コンポーネント1
const ReturnReactElement1 = (props) => {
    // コンソールログでpropsみるとわかりやうし
    return <h2>{props.music}</h2>
};


//コンポーネント2
const ReturnReactElement2 = ({name,music}) => {
    // コンソールログでpropsみるとわかりやうし
    return <h2>{name} {music}</h2>
};

// カスタムタグ用の閉じる
render(<ReturnReactElement2 name='ameriken' music='jazz'/>, document.getElementById('root'))