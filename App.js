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
                <Button
                    variant="text" disabled
                    paragraph='<Button variant="text" disabled />'
                >Disabled
                </Button>
            </div>
            <div className="wrapper">
                <Button
                    startIcon = "local_grocery_store"
                    paragraph='<Button startIcon="local_grocery_store" />'
                >Default
                </Button>
                <Button
                    endIcon = "local_grocery_store"
                    paragraph='<Button startIcon="local_grocery_store" />'
                >Default
                </Button>
            </div>
            <div className="wrapper">
                <Button 
                size="sm"
                paragraph='<Button size="sm"/>'
                >Default</Button>
                <Button 
                size="md"
                paragraph='<Button size="md"/>'
                >Default</Button>
                <Button
                size="lg"
                paragraph='<Button size="lg"/>'
                >Default</Button>
            </div>
            <div className="wrapper">
                <Button 
                size="md"
                color="default"
                paragraph='<Button color="default"/>'
                >Default</Button>
                <Button 
                size="md"
                color="primary"
                paragraph='<Button color="primary"/>'
                >Default</Button>
                <Button
                size="xlg"
                color="secondary"
                paragraph='<Button color="secondary"/>'
                >Secondary</Button>
                <Button
                size="md"
                color="danger"
                paragraph='<Button color="danger"/>'
                >Danger</Button>
            </div>
        </main>
    )
}

export default App
