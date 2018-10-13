import React from "react";

import { AddTodo }  from './components/AddTodo'
import { List }  from './components/List'

export class TodoApp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            todos3: [
                { id:0, title:"title0"},
                { id:1, title:"title1"},
                { id:2, title:"title2"},
                { id:3, title:"title3"},
                { id:4, title:"title4"},
            ],
            nextId: 0
        }
    }

    render() {
        const { todos3 } = this.state;
        return (
            <div>
                <h2>TodoApp</h2>
                {/*
                Addtodoはファイル名を指す
                addTodo2はAddtodo.jsのpropsの配列になる
                this.addTodo3は34行目に定義したaddTodoの関数
                 */}
                <AddTodo addTodo2={this.addTodo3}/>
                <List deleteTodo2={this.deleteTodo3} todos2={todos3} />
            </div>
        );
    }

    addTodo3 = title => {
        const { todos3,nextId } = this.state;
        this.setState({
            todos3: [...todos3, { id:nextId + 1, title:title }],
            nextId: nextId + 1
        });
    };

    deleteTodo3 = id => {
        const { todos3 } = this.state;
        this.setState({
            todos3: todos3.filter(todo => {
                return todo.id !== id;
            })
        });
    };
}
