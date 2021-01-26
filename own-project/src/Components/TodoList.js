import React from 'react'
import TodoItem from "./TodoItem";


const TodoList = ({todoList}) => {

    const items = todoList.map(item => {
        // console.log(item.id)
        return (
            <div className='item'>
                <TodoItem
                    name={item.name}
                    key={item.id}
                    status={item.status}
                />
            </div>
        )
    })

    return (
        <div className='todoList'>
            <h4 className="ui header medium">
                Todo List
            </h4>
            <div className="ui list">
                {items}
            </div>
        </div>
    )
}

export default TodoList
