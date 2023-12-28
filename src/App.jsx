import React from 'react'
import Navbar from './components/Navbar'
import { useSelector } from 'react-redux'
import Hero from './pages/Hero'
import Footer from './pages/Footer'

const App = () => {
  const state = useSelector(state =>state)
  return (
    <div className='bg-[#2B2B2B] h-screen'>
    <Navbar />
    <Hero/>
    <Footer />
    </div>
  )
}

export default App