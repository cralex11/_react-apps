import React from 'react';
import './Css/App.css'
import TodoList from './Components/TodoList'
import TodoItem from "./Components/TodoItem";

const todoList = [
    {
        id: 1,
        name: 'Create React app',
        status: true,
        dueTo: '11.20.2020',
        description:"I have to do this to learn better React"
    },
    {
        id: 2,
        name: 'Create Component',
        status: false,
        dueTo: '',
        description:"I have to do this to learn better React"
    },
    {
        id: 3,
        name: 'Do homework',
        status: true,
        dueTo: '',
        description:"I have to do this to learn better React"
    },
    {
        id: 4,
        name: 'Do Lenolen Micus',
        status: true,
        dueTo: '',
        description:"I have to do this to learn better React"
    }
]


const App = () => {

    return (
        <div className="container mx-auto">

            <TodoList todoList={todoList}/>
        </div>
    )
}

export default App
