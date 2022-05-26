import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.scss';
export {default as Header} from './Components/Header/Header.js';
export {default as HeaderMobile} from './Components/Header/HeaderMobile.js';
export {default as Main} from './Components/Main/Main.js'
export {default as Footer} from './Components/Footer/Footer.js'
export {default as Directions} from './Components/Directions/Directions.js'
export {default as CardsList} from './Components/CardsList/CardsList.js'
export {default as Teachers} from './Components/Teachers/Teachers.js'
// import {Publications, Test1, Test2} from './Components/Publications/Publications.js'

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.querySelector('#pedsurg')
);

// export {Publications, Test1, Test2};
