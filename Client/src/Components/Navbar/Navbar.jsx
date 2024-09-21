import React, { useState } from 'react'
import './Navbar.css'
import {FaPhone} from "react-icons/fa"
import { FaBars } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Create from '../../Pages/Create/Create'
function Navbar() {
const navigate= useNavigate()
    const [show, setshow]=useState(false)
    const [create, setcreate]= useState(false)
const handleHome=()=>
{
navigate("/")
}
const handleCreate =()=>
{
    setcreate(true)
}

const handleContact =()=> {
    alert("Contacts are mentioned below")
}

    const toggleBurger =()=>
    {
        setshow(!show)
    }
  return (
    <>
    <div className={`container1 ${show? "open":" "}`}>
        
        <div className="container2">
            <div className="logo-container">
                
                <div className="logo"><FaPhone/></div>
            </div>

            <div className="burger" onClick={toggleBurger}><FaBars/> </div>

            <ul className="nav-heading">
                
                    <li onClick={handleHome}>Home</li>
                    <li onClick={handleCreate}>Create Contact</li>
                    <li onClick={handleContact}>Contacts</li>
                    
                
            </ul>
        </div>
    </div>
    {create && <Create setcreate={setcreate}/>}
    </>
  )
}

export default Navbar
