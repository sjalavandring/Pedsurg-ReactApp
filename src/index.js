import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.scss';
import {CardsListImage, CardsListDescript, CardsListDropdown} from './Components/CardsList/CardsListInner.js'
import {Publications, Mentions, Books} from './Components/Publications/Publications.js';
export {default as Header} from './Components/Header/Header.js';
export {default as HeaderMobile} from './Components/Header/HeaderMobile.js';
export {default as Main} from './Components/Main/Main.js'
export {default as Footer} from './Components/Footer/Footer.js'
export {default as Directions} from './Components/Directions/Directions.js'
export {default as CardsList} from './Components/CardsList/CardsList.js'
export {default as useInnerWidth} from './Components/CardsList/useInnerWidth.js'
export {CardsListImage, CardsListDescript, CardsListTitle, CardsListDropdown, CardsListSlider} from './Components/CardsList/CardsListInner.js'
export {default as Teachers} from './Components/Teachers/Teachers.js'
export {default as DirectionsContext} from './Components/Directions/directionsContext.js'
export {default as Archive} from "./Components/Archive/Archive.js"
export {default as AboutUs} from "./Components/AboutUs/AboutUs.js"
// import {Publications, Test1, Test2} from './Components/Publications/Publications.js'



ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.querySelector('#pedsurg')
);

// export {Publications, Test1, Test2};
