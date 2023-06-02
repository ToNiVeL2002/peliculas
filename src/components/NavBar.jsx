import React from 'react'
import './NavBar.css'
import { Button } from './Button'

export const NavBar = () => {
  return (
    <div className='navbar-container'>
      <Button icon={"solar:home-2-outline"}/>

      <Button icon={"solar:ticket-sale-outline"}/>

      <Button icon={"solar:ticket-sale-outline"}/>

      <Button icon={"fluent:person-20-regular"}/>
    </div>
  )
}


