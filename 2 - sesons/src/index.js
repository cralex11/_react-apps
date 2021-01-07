import "./index.css"

import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay';
import Spinner from "./Spinner";
import Clock from "./Clock";


class App extends React.Component {

    // State initialization
    state = {lat: null, errorMessage: ''}

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            positionError => this.setState({errorMessage: positionError.message})
        )

    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat)
            return (<div className="ui center aligned container">
                Error: {this.state.errorMessage}
            </div>)
        else if (!this.state.errorMessage && this.state.lat)
            return (
                <SeasonDisplay lat={this.state.lat} />
            )
        else return <Spinner message="Please allow us to access your location" />
    }

    render() {
        return <div>
            {this.renderContent()}
            <br/>
            <Clock/>
        </div>
    }

}

ReactDOM.render(<
        App
    />,
    document
        .getElementById(
            'root'
        ))