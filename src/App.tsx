import { Routes, Route } from 'react-router'

// component pages
import Home from './pages/Home'
import Courses from './pages/Courses'
import About from './pages/About'
import Contact from './pages/Contact'

// component
import Navbar from './components/NavBar'

//  Css
import './App.css'


function App(){
  return(
    <>
      <div 
        className=''
      >
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Courses' element={<Courses />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App;