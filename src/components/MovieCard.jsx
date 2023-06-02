import React from 'react'
import './MovieCard.css'

export const MovieCard = (props) => {
  const actor = props.actor
  return (
    <div className='movie-container'>
        {/* <img src={`https://image.tmdb.org/t/p/w500/${ actor.name }`}  /> */}
        <img src="https://blog.latam.playstation.com/tachyon/sites/3/2022/06/35cad566eb5c0eb56188715723bbcb0c3d28982d.jpg?resize=1088%2C612&crop_strategy=smart" alt="" />
    </div>
  )
}

