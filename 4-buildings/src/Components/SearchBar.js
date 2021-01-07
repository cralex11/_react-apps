import React from "react";


class SearchBar extends React.Component {
    state = {searchTerm: ''}

    onInputChange = (e) => {
        this.setState({searchTerm: e.target.value})
    }

    onFormSubmit = e => {
        e.preventDefault()

        this.props.onFormSubmit(this.state.searchTerm)
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label htmlFor="search-input">Video Search</label>
                        <input
                            type="text"
                            className="search-input"
                            value={this.state.searchTerm}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}


export default SearchBar