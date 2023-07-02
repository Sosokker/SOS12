import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import { Menu, Guide, Navbar, Contacts, StarsCanvas, Problems, Faq } from "./components";
import "./index.css"
import "./components/Problems.css"

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-[#050816]'>
          <Navbar />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
        </div>
        <StarsCanvas />
        <div className='relative z-0'>
          {/* <Contact /> */}
          {/* <StarsCanvas /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
