import React from 'react'

function Button(props) {
    return ( <
        div className = "button-item" >
        <
        label > { props.label } < /label> <
        button className = { props.class } > { props.text } < /button> < /
        div >
    )
}

export default Button