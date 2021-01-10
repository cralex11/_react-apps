import React from "react";
import Accordion from "./Accordion";
import Search from "./Search";


const items = [
    {
        title: 'What is React?',
        content: 'React is front end js fram'
    },
    {
        title: 'Why use React?',
        content: 'React is front end js fram'
    },
    {
        title: 'Who use React Js?',
        content: 'React is front end js fram'
    },
]


export default () => {
    return (
        <div>

            <Search />
        </div>
    )
}
