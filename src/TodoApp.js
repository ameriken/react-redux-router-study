import React from "react";

import { AddTodo }  from './components/AddTodo'
import { ListTodo }  from './components/List'

export class TodoApp extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <h2>TodoApp</h2>
            </div>
        );
    }
}
