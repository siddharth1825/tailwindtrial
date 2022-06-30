import { Route, Routes } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './routes/About';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Menu from './routes/Menu';

function App() {

  const[open, setOpen] = useState(false);
  const toggle = ()=>{
    setOpen(!open);
  };

  useEffect(()=>{
    const hideMenu = ()=>{
      if(window.innerWidth > 768 && open){
        setOpen(false)
      }
    };
    window.addEventListener("resize", hideMenu);

    return ()=>{
      window.removeEventListener("resize", hideMenu)
    };
  })

  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown open={open} toggle={toggle}/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/menu" exact element={<Menu />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
      <Footer />
    </>    
  );
}

export default App;
