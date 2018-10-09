import React from "react";
import { render } from 'react-dom';

import { var1, function1, ReactComponent } from "./module";

console.log(var1);
function1();

const App = () => (
    <div>
        <h2>text</h2>
    </div>
)

// カスタムタグ用の閉じる
render(<ReactComponent />, document.getElementById('root'))