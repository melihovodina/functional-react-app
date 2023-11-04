import React from "react";
import classes from "./button.module.css"
const MyBtn = ({children, ...props}) => {
    return (
        <button className={classes.mybtn} {...props}>
            {children}
        </button>
    )
}
export default MyBtn