import React from 'react'
import './NavBar.css'
import { Button } from './Button'
import { NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react';

export const NavBar = () => {
  return (
    <div className='navbar-container'>

      <NavLink>
        <Icon className='icon' icon="solar:home-2-outline" />
        
      </NavLink>

      <NavLink>
      <Icon className='icon' icon="solar:ticket-sale-outline" />
      </NavLink>

      <NavLink>
      <Icon className='icon' icon="solar:ticket-sale-outline" />
      </NavLink>

      <NavLink>
      <Icon className='icon' icon="fluent:person-20-regular" />
      </NavLink>

    </div>
  )
}


