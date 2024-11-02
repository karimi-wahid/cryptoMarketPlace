import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {
  return (
    <div className='bg-gradient-to-r from-blue-950 to-slate-900 w-full h-full'>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}


  export default App
