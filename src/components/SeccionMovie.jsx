import React from 'react'
import './SeccionMovie.css'
import { MovieCard } from './MovieCard'
const SeccionMovie = ({poster, title}) => {
  
  return (
    <div className="seccion-container">
      {/* <span>{title}</span> */}
      <span className='title'>{title}</span>
      <div className='seccion-slider'>

        {/* {
          poster.map((poster) => {
            return <MovieCard poster={poster} key={poster.id}/>
          })
        } */}

        {/* <MovieCard poster={poster} key={poster.id}/> */}
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>

        

        {
          // movies.map((movie) => {
          //   <img src={movie.url} alt="" />
          // })
        }
        
      </div>
    </div>
  )
}

export default SeccionMovie
