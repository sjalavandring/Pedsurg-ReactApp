import './App.scss';
import React, {useContext, Suspense} from 'react'
import Header from './Components/Header/Header.js'
import HeaderMobile from './Components/Header/HeaderMobile.js'
import {BrowserRouter,Routes, Route} from "react-router-dom";
import MediaQuery from 'react-responsive';

// const Header = React.lazy(() => import('./Components/Header/Header.js'));
// const HeaderMobile = React.lazy(() => import('./Components/Header/HeaderMobile.js'));
const Main = React.lazy(() => import('./Components/Main/Main.js'));
const Footer = React.lazy(() => import('./Components/Footer/Footer.js'));
const Directions = React.lazy(() => import('./Components/Directions/Directions.js'));
const Teachers = React.lazy(() => import('./Components/Teachers/Teachers.js'));
const Archive = React.lazy(() => import('./Components/Archive/Archive.js'));
const AboutUs = React.lazy(() => import('./Components/AboutUs/AboutUs.js'));
const Publications = React.lazy(() => import('./Components/Publications/Publications.js'));
const Mentions = React.lazy(() => import('./Components/Publications/Mentions.js'));
const Books = React.lazy(() => import('./Components/Publications/Books.js'));
const NotFound = React.lazy(() => import('./Components/NotFound/NotFound.js'));

function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <MediaQuery minWidth={1200}>
          <Header/>
        </MediaQuery>
        <MediaQuery maxWidth={1199}>
          <HeaderMobile/>
        </MediaQuery>
        <Suspense fallback={<main className="main"></main>}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='directions' element={<Directions />} />
          <Route path='teachers' element={<Teachers />} />
          <Route path='publications/*' element={< Publications />}>
            <Route path='mentions/' element={< Mentions />} />
            <Route path='books/' element={< Books />} />
            <Route path='*' element={<NotFound/>} />
          </Route>
          <Route path='archive' element={<Archive />} />
          <Route path='about' element={<AboutUs />} />
          <Route path='/*' element={<main className="main main-not-found"><NotFound/></main>} />
        </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}


export default App;
