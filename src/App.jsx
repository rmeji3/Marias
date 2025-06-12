import { useState } from 'react'
import Location from './components/location'
import Home from './components/home'
import './App.css'
import Navbar from './components/navbar'


function App() {
  return (
    <>
      <div className='font-inter'>
        <Navbar/>
        <Home/>
        <Location/>
      </div>
    </>
  )
}

export default App;
