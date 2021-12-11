import React from 'react';
import { Children } from 'react/cjs/react.production.min';
import './Button.css';
const STYLES = ['brn--primary', 'btn--outline'];
const SIZES =['btn--medium','btn--large','btn--mobile','btn--wide'];
const COLOR =['primary', 'blue','red','green'];

export const Button=({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor
}) => {
    const checkButtonStyle=STYLES.includes(buttonStyle) ? buttonStyle: STYLES[0];
    return(
        <button className={`btn ${checkButtonStyle} ${CheckButtonSize} 
        ${checkButtonColor}`} onClick={onClick} type={type}  > {Children}</button>
)}