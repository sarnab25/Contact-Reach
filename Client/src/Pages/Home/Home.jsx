import React from 'react'
import './Home.css'
import {useNavigate} from 'react-router-dom'
function Home() {
  const navigate=useNavigate()

  const handleLogs =()=>
  {
    navigate("/logs")
  }
  const handleClick=()=>
  {
    navigate('/allcontacts')
  }
  return (
    <div className="menu-container">
    <div className='text'>
      <h1>Reach out to your colleagues and friend 👍</h1>
      <button onClick={handleClick}>Your Contact List</button>
      <button onClick={handleLogs} >Your Call Logs</button>
    </div>
    </div>
  )

}

export default Home
