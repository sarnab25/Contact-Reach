import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import AllRoutes from './Components/AllRoutes'
// import './App.css'

function App() {
  
return(
  <Router>
    <Navbar/>
    <AllRoutes/>
    <Footer/>
  </Router>
)
  
}

export default App
