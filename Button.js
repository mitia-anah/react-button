import React from 'react'

function Button(props) {
    const defaultButton = props.default ? "default-button" : " ";
    const variantOutline = props.variant === "outline" ? "outline" : " ";
    const variantText = props.variant === "text" ? "variant-text" : " ";
    const disableShadow = props.disableShadow ? "disable-shadow" : " ";
    const disabledButton = props.disabled === "disabled" ? " disabled-btn" : " ";
    return (
        <div className="button-item">
            <p>{props.paragraph}</p>

            <button className={`
                ${defaultButton}
                ${variantOutline}
                ${variantText}
                ${disableShadow}
                ${disabledButton}
            `}

            >{props.children}</button>
        </div>
    )
}

export default Button