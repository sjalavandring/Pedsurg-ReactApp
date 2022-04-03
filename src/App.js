import './App.scss';
import {Header, Main, Footer, Directions} from './index.js'
import {BrowserRouter,Routes, Route} from "react-router-dom";

//asdasdasd

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/directions' element={<Directions />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
