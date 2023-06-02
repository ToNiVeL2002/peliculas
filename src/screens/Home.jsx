import React from 'react'
import Serch from '../components/Serch'
import PosterCard from '../components/SeccionMovie'
import SeccionMovie from '../components/SeccionMovie'
import { NavBar } from '../components/NavBar'
import { useEffect, useState } from "react";

const Home = () => {

  // const [dogs, setDogs] = useState("");
  // // console.log(dogs);
  // useEffect(() => {
  //   fetch("https://api.thecatapi.com/v1/images/search")
  //     .then((response) => response.json())
  //     .then((data) => setDogs(data));
  // }, []);

  const [posters, setPosters] = useState([])
  console.log(posters)
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/trending/all/week?api_key=77e8c4b872c1f73d67d98342f765eabb")
    .then((response) => response.json())
    .then((data) => setPosters(data.results));
  }, [])




  return (
    <div>
      <Serch/>

      <SeccionMovie poster = {posters} title={"New Movies"}/>

      <SeccionMovie poster = {posters} title={"Comming Soon"}/>

      <SeccionMovie poster = {posters} title={"Top Movie"}/>

      <SeccionMovie poster = {posters} title={"Accion Movie"}/>

      {/* <SeccionMovie title={"New Movies"}/>
      <SeccionMovie title={"Comming Soon"}/>
      <SeccionMovie title={"Top Movie"}/>
      <SeccionMovie title={"Accion Movie"}/> */}

      <NavBar/>
    </div>
  )
}

export default Home
