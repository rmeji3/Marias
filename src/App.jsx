import { useState } from 'react'
import Location from './components/location'
import Home from './components/home'
import './App.css'
import Navbar from './components/navbar'
import { Routes, Route, useLocation} from 'react-router-dom';
import Menu from './pages/menu'
import { useRef } from 'react'
import MenuNavbar from './components/menuNavbar'

function App() {
  const location = useLocation();
  const isMenuPage = location.pathname === "/menu";

  const locationRef = useRef(null);
  const specialsRef = useRef(null);
  const orderNowRef = useRef(null);

  return (

    <div className="font-inter">
      {/* Conditional navbar */}
      {isMenuPage ? (
        <MenuNavbar />
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
                <Location locationRef={locationRef} />
              </>
            }
          />
          {/* Menu page */}
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
  );
}

export default App;
