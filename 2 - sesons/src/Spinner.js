import React from "react";


const Spinner = (props) => {
    return (
        <div className="ui active dimmer inverted">
            <div className="ui text loader">
                {props.message}
            </div>
        </div>
    );
}
//if the prop isn't defined
Spinner.defaultProps = {
    message: 'Loading...',
}

export default Spinner;