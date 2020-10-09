import React from 'react'

function Button(props) {
    return ( <
        div className = "button-item" >
        <
        p > { props.paragraph } < /p> <
        button className = 'button' > { props.text } < /button> < /
        div >
    )
}

export default Button