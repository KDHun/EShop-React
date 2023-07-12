import React from 'react';
import classes from './Input.module.css';
const Input = (props)=>{
    return <> 
    <label htmlFor={props.input.id} className={classes.Label}>{props.label}</label>
    <input {...props.input} className={classes.Input} />
    </>
}

export default Input;