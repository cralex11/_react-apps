import React, {useState} from "react";


const SearchBar = ({onFormSubmit}) => {
    const [searchTerm, setSearchTerm] = useState('')

    const onSubmit = e => {
        e.preventDefault()
        onFormSubmit(searchTerm)
    }

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label htmlFor="search-input">Video Search</label>
                    <input
                        type="text"
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) =>  setSearchTerm(e.target.value)}
                    />
                </div>
            </form>
        </div>
    )

}


export default SearchBar