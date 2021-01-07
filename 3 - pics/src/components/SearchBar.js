import React from "react";


class SearchBar extends React.Component {
    state = {term: ''};

    onFormSubmit = (event) => {
        event.preventDefault();


        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment SearchBar">
                <form
                    className="ui form"
                    onSubmit={this.onFormSubmit}
                >
                    <div className="ui field">
                        <label className="ui label" htmlFor="search">Search for a car</label>
                        <input
                            type="text"
                            placeholder="Search..."
                            id="search"
                            onChange={e => this.setState({term: e.target.value})}
                            value={this.state.term}
                        />
                    </div>
                </form>
            </div>
        )
    }
}


export default SearchBar;