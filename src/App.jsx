import { useRef } from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Location from './components/location';
import Specials from './components/specials';
import './App.css';

function App() {
  const homeRef = useRef(null);
  const locationRef = useRef(null);
  const specialsRef = useRef(null);

  return (
    <div className="font-inter">
      <Navbar homeRef={homeRef} locationRef={locationRef} specialsRef={specialsRef} />
      <div ref={homeRef}><Home /></div>
      <div ref={locationRef}><Location /></div>
      <div ref={specialsRef}><Specials /></div>
    </div>
  );
}

export default App;
