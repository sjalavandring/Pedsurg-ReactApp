import './App.scss';
import {useContext} from 'react'
import {Header, Main, Footer, Directions, Publications} from './index.js'
import {BrowserRouter,Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/directions' element={<Directions />} />
        <Route path='/publications' element={< Publications />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
