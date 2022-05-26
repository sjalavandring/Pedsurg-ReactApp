import './App.scss';
import {useContext} from 'react'
import {Header, HeaderMobile, Main, Footer, Directions, Teachers} from './index.js'
import {BrowserRouter,Routes, Route} from "react-router-dom";
import {Publications, Mentions, Books} from './Components/Publications/Publications.js';
import MediaQuery from 'react-responsive';

function App() {
  return (
    <BrowserRouter>
      <MediaQuery minWidth={1200}>
        <Header/>
      </MediaQuery>
      <MediaQuery maxWidth={1199}>
        <HeaderMobile/>
      </MediaQuery>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/directions' element={<Directions />} />
        <Route path='/teachers' element={<Teachers />} />
        <Route path='/publications/*' element={< Publications />}>
          <Route index path='*' element={< Mentions />} />
          <Route path='mentions' element={< Mentions />} />
          <Route path='books' element={< Books />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}


export default App;
