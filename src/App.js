import './App.css';
import Navbar from './Components/Navbar';




import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Portfolio from './Components/Portfolio';
import Home from './Components/Home';
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Pageloader from './Components/Pageloader';

function App() {
  return (
    <div >

      <Pageloader/>

      <BrowserRouter>
        <Navbar />
        

        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/about' element={ <About/>} />
          <Route path='/portfolio' element={ <Portfolio/>} />
          <Route path='/blog' element={ <Blog/>} />
          <Route path='/contact' element={ <Contact/>} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
