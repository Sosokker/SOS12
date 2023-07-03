import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Contacts, Faq, Menu, Navbar, Problems} from "./components";
import "./index.css"
import "./components/Problems.css"

const App = () => {
    return (
        <BrowserRouter>
            <div className='relative z-0 bg-primary'>
                <div className='bg-[#050816]'>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Menu/>}/>
                        <Route path="/problems" element={<Problems/>}/>
                        <Route path="/contacts" element={<Contacts/>}/>
                        <Route path="/contact" element={<Contacts/>}/>
                        <Route path="/faq" element={<Faq/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
