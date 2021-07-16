import React from 'react'
import "./style.css"

class Input extends React.Component {

    render() {
        const { value } = this.props
        return (
            <>
                <input
                    className="input"
                    type="text"
                    readOnly
                    value={value}
                    placeholder="0"
                >
                </input>
            </>
        );
    }
}

export default Input
