import { Routes, Route } from "react-router";
import Navbar from './components/NavBar';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <>
      
      <Navbar />

       <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Courses" element={<Courses />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Contact" element={<Contact />}/>
        </Routes>
    </>
  );
}

export default App