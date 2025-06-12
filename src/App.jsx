import { useState } from 'react'
import Location from './components/location'
import Home from './components/home'
import './App.css'
import Navbar from './components/navbar'


function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Location/>
    </>
  )
}

export default App;
