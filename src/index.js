import React from "react";
import { render } from 'react-dom';
import MyType from './MyType';

render(
    <div>
        <MyType value="あめりけん" />
        <MyType value={"あめりけん"} />
        <MyType value ={108} />
        <MyType value ={true} />
        <MyType value ={['うめ','もも','さくら']} />
        <MyType value ={{name: "山田進太郎",age:40}} />
        <MyType value ={() => console.log('Hoge')} />
    </div>
    , document.getElementById('root'))