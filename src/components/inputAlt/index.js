import React from 'react';
import "./style.css"


class InputAlt extends React.Component {

  render() {
    const { value } = this.props
    return (
      <>
        <input
          className="inputAlt"
          type="text"
          value={value}
          readOnly
        >
        </input>
      </>
    )
  }
}

export default InputAlt;
