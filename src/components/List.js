import React from "react";


export class List extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const list = this.props.todos2.map(todo => {
            return (
                <li key={todo.id}>
                    #{todo.id} {todo.title}
                    <button onClick={ () => {
                        this.props.deleteTodo2(todo.id);
                    }}>delete
                    </button>
                </li>
            );
        });

        return (
            <div>
                <h2>List</h2>
                <ul>{list}</ul>
            </div>
        );
    }
}