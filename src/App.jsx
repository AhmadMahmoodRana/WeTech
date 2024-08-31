import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import TopNavbar from './components/TopNavbar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MobileNavbar from './components/MobileNavbar'
import { Context } from './context/Context'
import Register from './pages/Register'
import ContactUs from './components/ContactUs'
import Course3 from './pages/Course3'
import Course1 from './pages/Courses1'
import Course4 from './pages/Courses4'
import Course2 from './pages/Courses2'
const App = () => {
  const {isOpen} = useContext(Context)
  return (
    <>
      <TopNavbar/>
      <Navbar />
      <ContactUs/>
      {
        isOpen ? <MobileNavbar /> : null
      }
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/course1' element={<Course1/>} />
        <Route path='/course2' element={<Course2/>} />
        <Route path='/course3' element={<Course3/>} />
        <Route path='/course4' element={<Course4/>} />
        <Route path='*' element={<h1>Page Not Found</h1>} />


      </Routes>
      <Footer />

    </>
  )
}

export default App
