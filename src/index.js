import React from "react";
import { render } from 'react-dom';

// export default のパターン
import ClassComponent1 from "./ClassComponent1";
import ClassComponent2 from "./ClassComponent2";
// export (default ではない)パターン
import { ClassComponent3 } from "./ClassComponent3";

// カスタムタグ用の閉じる
render(
    <div>
        <ClassComponent1 />
        <ClassComponent2 />
        <ClassComponent3 />
    </div>,
    document.getElementById('root'))