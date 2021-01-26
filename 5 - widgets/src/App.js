import React, {useState, useEffect} from "react";

import Accordion from "./Components/Accordion";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";
import Translate from "./Components/Translate";
import Route from "./Components/Route";
import Header from "./Components/Header";


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


const options = [
    {
        label: 'Color of Red',
        value: 'red'
    },
    {
        label: 'Color of Green',
        value: 'green'
    },
    {
        label: 'Color of Blue',
        value: 'blue'
    },
]


export default () => {
    const [selected, setSelected] = useState(options[0])
    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path='/list'>
                <Search />
            </Route>
            <Route path='/dropdown'>
                <Dropdown
                    label="Select colors"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path='/translate'>
                <Translate />
            </Route>
        </div>
    )
}
