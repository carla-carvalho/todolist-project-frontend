import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './components/Navbar';
import './index.css';
import Register from './pages/Register/Register';
import { GlobalStyle} from './styles/global';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
      <GlobalStyle/>
      <Navbar/>
    <BrowserRouter>
    <Routes>
    <Route path='/register' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  

    
  </React.StrictMode>,
  document.getElementById('root')
);

