import React from 'react'


const TodoItem = ({ todo, delete_todo }) => {
    return (
        <tr>
            <td>{todo.id}</td>
            <td>{todo.text}</td>
            <td>{todo.is_active ? 'True' : 'False'}</td>
            <td>{todo.create.slice(0, 10)}</td>
            <td><button onClick={()=>delete_todo(todo.id)} type='button'>Delete</button></td>

            
        </tr>
    )
}

const TodoList = ({ todos, delete_todo }) => {
    return (
        <table className="table">
            <tr>
                <th>ID</th>
                <th>Text</th>
                <th>Is active</th>
                <th>Create</th>
            </tr>
            {todos.map((todo) => <TodoItem key={todo.id} todo={todo} delete_todo={delete_todo} />)}
        </table>
    )
}

export default TodoList
