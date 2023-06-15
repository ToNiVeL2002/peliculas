import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './screens/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/peliculas/:slug' element={<App/>}/>

        <Route path='*' element={<p> Not found </p>} />
      </Routes>

      <NavBar/>
    </BrowserRouter>
  </React.StrictMode>,
)