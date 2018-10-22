import React from "react";
import { render } from 'react-dom';
import MyBook from "./MyBook";

const book = {
    isbn: 'WGS-JST-001',
    title: '速習 webpack',
    price: 454,
    published: 'WINGSプロジェクト'
};

render(
    <MyBook info={book} />,
    document.getElementById('root')
);