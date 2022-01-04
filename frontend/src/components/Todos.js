import React from 'react'


const TodoItem = ({ todo }) => {
    return (
        <tr>
            <td>{todo.id}</td>
            <td>{todo.text}</td>
            <td>{todo.is_active ? 'True' : 'False'}</td>
            <td>{todo.create.slice(0, 10)}</td>

            
        </tr>
    )
}

const TodoList = ({ todos }) => {
    return (
        <table className="table">
            <tr>
                <th>ID</th>
                <th>Text</th>
                <th>Is active</th>
                <th>Create</th>
            </tr>
            {todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
        </table>
    )
}

export default TodoList
