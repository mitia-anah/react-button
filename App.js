import React from 'react'

import style from 'style.css'
import Button from './Button'

function App() {
    return ( <
        div >
        <
        div className = "wrapper" >
        <
        Button class = "btn origin"
        label = "<Button/>"
        text = "Default" / >
        <
        Button class = "btn origin-hover"
        label = "&:hover , &:focus"
        text = "Default" / >
        <
        /div> <
        div className = "wrapper" >
        <
        Button class = "btn variant-outline"
        label = "<Button variant=`outline`"
        text = "Default" / >
        <
        Button class = "btn variant-hover"
        label = "&:hover , &:focus"
        text = "Default" / >
        <
        /div> <
        div className = "wrapper" >
        <
        Button class = "btn text"
        label = "<Button variant:`text`/>"
        text = "Default" / >
        <
        Button class = "btn text-hover"
        label = "&:hover , &:focus"
        text = "Default" / >
        <
        /div> <
        div className = "wrapper" >
        <
        Button class = "btn disable-shadow"
        label = "<Button disableShadow/>"
        text = "Default" / >
        <
        /div> <
        div className = "wrapper" >
        <
        Button class = "btn disabled"
        label = "<Button disabled/>"
        text = "Default" / >
        <
        Button class = "btn disable-hover"
        label = "<button variant=`text` disabled"
        text = "Default" / >
        <
        /div> <
        div className = "wrapper" >
        <
        Button label = "<Button/>"
        text = "Default" / >
        <
        Button label = "<Button variant=`outline`"
        text = "Default" / >
        <
        /div> < /
        div >
    )
}

export default App