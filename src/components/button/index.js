import React from 'react'
import "./style.css"

function Button(props) {
    const { action, value, style } = props
    return (
        <>
            <button className={style} onClick={() => action(value)}>
                {value}
            </button>
        </>
    )
}

export default Button
