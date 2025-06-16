import { useRef, useMemo, createRef  } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';

import './App.css'

import Location from './components/location'
import Specials from './components/specials'
import menuData from './data/menu_data.json';

import Home from './components/home'
import Navbar from './components/navbar'
import OrderNow from './components/orderNow'
import Footer from './components/footer'
import Menu from './pages/menu'
import MenuNavbar from './components/menuNavbar'

function App() {
  const location = useLocation();
  const isMenuPage = location.pathname === "/menu";
  
  // Create refs for all menu sections
  const locationRef = useRef(null);
  const specialsRef = useRef(null);
  const orderNowRef = useRef(null);
  
  // Menu section refs
  const sectionRefs = useMemo(() => {
    const refs = {};
    menuData.forEach(({ section }) => {
      refs[section] = createRef();
    });
    return refs;
  }, []);

  return (
    <div className="font-inter">
      {/* Conditional navbar */}
      {isMenuPage ? (
         <MenuNavbar sectionRefs={sectionRefs} />
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
            <Location locationRef ={locationRef} />
            <Specials specialsRef={specialsRef} />
            <OrderNow orderNowRef={orderNowRef} />
            <Footer />
          </>
        } />
        
        {/* Menu page */}
        <Route path="/menu" element={
          <>
            <Menu sectionRefs={sectionRefs} />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;