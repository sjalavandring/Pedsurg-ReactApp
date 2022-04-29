import './App.scss';
import {useContext} from 'react'
import {Header, Main, Footer, Directions} from './index.js'
import {BrowserRouter,Routes, Route} from "react-router-dom";
import {Publications, Mentions, Books} from './Components/Publications/Publications.js'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/directions' element={<Directions />} />
        <Route path='/publications' element={< Publications />}>
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
