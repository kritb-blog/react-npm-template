import React, { FunctionComponent } from "react";
import "./Button.css";

export interface ButtonProps {
    label: string;
}

const Button: FunctionComponent<ButtonProps> = (props) => {
    return <button>{props.label}</button>;
};

export default Button;
