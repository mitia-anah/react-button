import React from 'react'

function Button(props) {
    const defaultButton = props.default ? "default-button" : " ";
    const variantOutline = props.variant === "outline" ? "outline" : " ";
    const variantText = props.variant === "text" ? "variant-text" : " ";
    const disableShadow = props.disableShadow ? "disable-shadow" : " ";
    const disabledButton = props.disabled ? "disabled-button" : "";
    const variantTextDisabled = props.variant=== "text" ? "text-disabled" : "";
    const svgImage = <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
    const startIcon = props.startIcon === "local_grocery_store" ? svgImage : "";
    const endIcon = props.endIcon === "local_grocery_store" ? svgImage : "";
    const buttonWithIcon = props.startIcon || props.endIcon === "local_grocery_store" ? "button-with-icon" : "";
    const smallBtn = props.size === "sm" ?  "small-button" : "";
    const mediumBtn = props.size === "md" ? "medium-button" : "";
    const largeBtn = props.size === "lg" ? "large-button" : "";
    const defaultColor = props.color === "default" ? "default" : "";
    const primaryBtn = props.color === "primary" ? "primary" : "";
    const secondaryBtn = props.color === "secondary" ? "secondary" : "";
    const dangerBtn = props.color === "danger" ? "danger" : "";



    return (
        <div className="button-item">
            <p>{props.paragraph}</p>

            <button className={`
                ${defaultButton}
                ${variantOutline}
                ${variantText}
                ${disableShadow}
                ${disabledButton}
                ${variantTextDisabled}
                ${buttonWithIcon}
                ${smallBtn}
                ${mediumBtn}
                ${largeBtn}
                ${defaultColor}
                ${primaryBtn}
                ${secondaryBtn}
                ${dangerBtn}
            `}

    >{startIcon} {props.children} {endIcon}</button>
        </div>
    )
}

export default Button