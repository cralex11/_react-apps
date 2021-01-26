import React, {useState} from 'react'

import './Todoitem.css'


const TodoItem = ({name, description, key, status}) => {
    const [x, setX] = useState(status)

    let itemClass = x ? '' : 'done'
    const toChecked = () => {
        //change class
        if (itemClass === '')
            itemClass = 'done'
        else itemClass = ''
        //change state
        setX(!x);
    }


    return (
        <div className="ui grid">
            <div className="row">
                <div className="eleven wide column">
                    <h3 className={`ui header medium ${itemClass}`}>
                        {name}
                    </h3>
                </div>
                <div className="four wide column">
                    <div className="ui checkbox">
                        <input
                            type="checkbox"
                            defaultChecked={x ? '' : 'checked'}
                            value={x}
                            onChange={toChecked}
                        />
                        <label></label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoItem
