import React from 'react'
import { Icon } from '@iconify/react';
import './Button.css'

export const Button = ({icon}) => {
  return (
    <div className='button-container'>
      <Icon className='icon' icon={icon}  onClick={() => {
        console.log("NAVEGANDO")
      }}/>
    </div>
  )
}


