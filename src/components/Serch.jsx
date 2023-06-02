import React from 'react'
import './Serch.css'
import { Icon } from '@iconify/react';

const Serch = () => {
  return (
    <div className='serch-container'>
        <Icon className='icono' icon="clarity:search-line"  onClick={() => {
          console.log("BUSCANDO")
        }}/>

        <input className='hola' type="text" placeholder='Search Movie'/>
        
    </div>
  )
}

export default Serch
