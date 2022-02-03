import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import Register from './pages/Register/Register';
import { GlobalStyle} from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <>
    <Register />
    <GlobalStyle></GlobalStyle>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

