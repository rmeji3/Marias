import { useState } from 'react'
import Location from './components/location'
import Specials from './components/specials'
import './App.css'

import Home from './components/home'
import Navbar from './components/navbar'
import OrderNow from './components/orderNow'
import Footer from './components/footer'

import { Routes, Route, useLocation } from 'react-router-dom';
import Menu from './pages/menu'
import { useRef } from 'react'
import MenuNavbar from './components/menuNavbar'

function App() {
  const location = useLocation();
  const isMenuPage = location.pathname === "/menu";
  
  // Create refs for all menu sections
  const locationRef = useRef(null);
  const specialsRef = useRef(null);
  const orderNowRef = useRef(null);
  
  // Menu section refs
  const tacoRef = useRef(null);
  const alacarteRef = useRef(null);
  const breakfastRef = useRef(null);
  const burritoRef = useRef(null);
  const soupRef = useRef(null);
  const dessertRef = useRef(null);
  const sidesRef = useRef(null);
  const drinksRef = useRef(null);
  const tamalesRef = useRef(null);
  const seafoodRef = useRef(null);
  const saladsRef = useRef(null);
  const specialtyRef = useRef(null);

  return (
    <div className="font-inter">
      {/* Conditional navbar */}
      {isMenuPage ? (
        <MenuNavbar
          tacoRef={tacoRef}
          alacarteRef={alacarteRef}
          breakfastRef={breakfastRef}
          burritoRef={burritoRef}
          soupRef={soupRef}
          dessertRef={dessertRef}
          sidesRef={sidesRef}
          drinksRef={drinksRef}
          tamalesRef={tamalesRef}
          seafoodRef={seafoodRef}
          saladsRef={saladsRef}
          specialtyRef={specialtyRef}
        />
      ) : (
        <Navbar
          locationRef={locationRef}
          specialsRef={specialsRef}
          orderNowRef={orderNowRef}
        />
      )}

      <Routes>
        {/* Main page */}
        <Route path="/" element={
          <>
            <Home />
            <Location ref={locationRef} />
            <Specials ref={specialsRef} />
            <OrderNow ref={orderNowRef} />
            <Footer />
          </>
        } />
        
        {/* Menu page */}
        <Route path="/menu" element={
          <>
            <Menu 
              tacoRef={tacoRef}
              alacarteRef={alacarteRef}
              breakfastRef={breakfastRef}
              burritoRef={burritoRef}
              soupRef={soupRef}
              dessertRef={dessertRef}
              sidesRef={sidesRef}
              drinksRef={drinksRef}
              tamalesRef={tamalesRef}
              seafoodRef={seafoodRef}
              saladsRef={saladsRef}
              specialtyRef={specialtyRef}
            /> 
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;