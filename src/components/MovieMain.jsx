import React from 'react'
import { Gender } from './Gender'
import movie from '../assets/peliculas.json'
import './MovieMain.css'
import { useParams } from 'react-router-dom'

export const MovieMain = ({peli}) => {
  return (
    <div className='move-main-container'>
      <img src={peli.Poster} alt="" />
      {/* <img src={movie.imgsrc} alt="" /> */}
      {/* <img src={dogs[0]?.url} alt="" /> */}
      <Gender peli={peli}/>
      <span>
        {peli.Plot}
      </span>
    </div>
  )
}


