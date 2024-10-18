import React from 'react';
import { MdMessage } from "react-icons/md";
import './Button.css'

const Button = (props) => {
  return (
    
    <button className='primary_button' onClick={props.func}>
      {props.icon}
      {props.name}
      </button>

  )
}

export default Button;
