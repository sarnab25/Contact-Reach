import React, { useState } from 'react'
import axios from 'axios'
import './Send.css'
import { useLocation, useParams } from 'react-router-dom'
function Send() {
   const {fullName}= useParams()
    const [message, setmessage]= useState("")
    const handleClick =async()=>
    {
try {
    const response = await axios.post(`http://localhost:7080/send/${fullName}`)
    alert("Message to verified reciepient phone number , becuase the number provided in task needs to be verified first to sent message")
    setmessage(`Hi, Your OTP is ${response.data}`)
} catch (error) {
    console.error('Error sending OTP:', error);
}
    }
  return (
    <div className='message-container'>
        <div className="text">
            <textarea name="message" id="message" value={message}> </textarea>
        </div>
        <button onClick={handleClick}>Send</button>
      
    </div>
  )
}

export default Send
