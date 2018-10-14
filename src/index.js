import React from "react";
import { render } from 'react-dom';
import axios from "axios";

const url = "https://api.myjson.com/bins/105vxc"

axios.get(url).then(res => {
    console.log(res.data);
});

render(<h2>こんにちは世界</h2>, document.getElementById('root'))