import React from "react";
import { render } from "react-dom";

const todos = [
    { id: 1, title: "title1" },
    { id: 2, title: "title2" },
    { id: 3, title: "title3" },
    { id: 4, title: "title4" }
];

const deleteTargetId = 3;
const deleteTargetTitle = "title4";

// filter を使って
// deleteTargetId 以外のものだけを採用する

const deletedArray = todos.filter(todo => todo.id !== deleteTargetId);
const deletedArray2 = todos.filter(todo => todo.title !== deleteTargetTitle);

console.log(deletedArray);
console.log(deletedArray2);
