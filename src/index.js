import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.scss';
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
export {default as Header} from './Components/Header/Header.js';
export {default as Main} from './Components/Main/Main.js'
export {default as Footer} from './Components/Footer/Footer.js'
export {default as Directions} from './Components/Directions/Directions.js'
export {default as CardsList} from './Components/CardsList/CardsList.js'
export {default as Publications} from './Components/Publications/Publications.js'

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.querySelector('#pedsurg')
);


