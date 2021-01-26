import React, {useState} from "react";

import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
    {
        label: 'Romanian',
        value: 'ro'
    },
    {
        label: 'Russian',
        value: 'ru'
    },
    {
        label: 'English',
        value: 'en'
    }
]

const Translate = () => {
    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState('');
    return (
        <div className="ui container">
            <div className="ui form">
                <div className="field">
                    <label className="ui label">Enter text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
                label="Select a language"
            />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language} />
        </div>
    )
}

export default Translate