import React from 'react'

import style from 'style.css'
import Button from './Button'

function App() {
    return ( <
        div className = "button-list" >
        <
        div className = "wrapper" >
        <
        Button className = "button"
        paragraph = "<Button/>"
        text = "Default" / >
        <
        Button paragraph = "&:hover , &:focus"
        text = "Default" / >
        <
        /div> <
        div className = "wrapper" >
        <
        Button className = ""
        paragraph = "<Button/>"
        text = "Default" / >
        <
        Button paragraph = "<Button variant=`outline`"
        text = "Default" / >
        <
        /div> <
        div className = "wrapper" >
        <
        Button className = ""
        style = { origin }
        paragraph = "<Button/>"
        text = "Default" / >
        <
        Button paragraph = "&:hover , &:focus"
        text = "Default" / >
        <
        /div> <
        div className = "wrapper" >
        <
        Button paragraph = "<Button/>"
        text = "Default" / >
        <
        Button paragraph = "<Button variant=`outline`"
        text = "Default" / >
        <
        /div> <
        div className = "wrapper" >
        <
        Button paragraph = "<Button/>"
        text = "Default" / >
        <
        Button paragraph = "&:hover , &:focus"
        text = "Default" / >
        <
        /div> <
        div className = "wrapper" >
        <
        Button paragraph = "<Button/>"
        text = "Default" / >
        <
        Button paragraph = "<Button variant=`outline`"
        text = "Default" / >
        <
        /div> < /
        div >
    )
}

export default App