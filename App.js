import React from 'react'

import style from 'style.css'
import Button from './Button'

function App() {
    return (
        <main>
            <div className="wrapper">
                <Button 
                    default
                    paragraph='<Button />'
                >Default
                </Button>
            </div>
            <div className="wrapper">
                <Button
                    variant="outline" 
                    paragraph='<Button variant="outline"/>'
                >Default
                </Button>
            </div>
            <div className="wrapper">
                <Button
                    variant="text" 
                    paragraph='<Button variant="text"/>'
                >Default
                </Button>
            </div>
            <div className="wrapper">
                <Button
                    disableShadow
                    paragraph="<Button disableShadow/>"
                >Default
                </Button>
            </div>
            <div className="wrapper">
                <Button
                    disabled
                    paragraph="<Button disabled />"
                >Disabled
                </Button>
            </div>
        </main>
    )
}

export default App
