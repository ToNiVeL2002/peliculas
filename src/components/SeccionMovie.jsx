import React from 'react'
import './SeccionMovie.css'
import { MovieCard } from './MovieCard'
const SeccionMovie = ({poster, title}) => {
  
  return (
    <div className="seccion-container">
      {/* <span>{title}</span> */}
      <span className='title'>{title}</span>
      <div className='seccion-slider'>

        {
          poster.map((poster) => {
            return <MovieCard key={poster.id} imagen={poster.poster_path} name={poster.title}/>
          })
        }


        {/* <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/> */}
        

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
