import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import Home from './components/Pages/Home';
import Favorites from './components/Pages/Favorites';
import Cart from './components/Pages/Cart';
import Description from './components/Pages/Description';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/description' element={<Description/>}/>
        </Routes>
      </div>    
    </BrowserRouter>
  );
}

export default App;
