import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './Details.css'
function Details() {
    const {id}= useParams()
    const [contact, setcontact]=useState("")
const navigate = useNavigate()
    useEffect(()=>
    {
        const fetchDetails=async()=>
        {
            try {
                const response = await axios.get(`https://contact-reach.onrender.com/contacts/${id}`)
             
                setcontact(response.data)
                console.log("Fetched Contaact:",contact)
            } catch (error) {
                console.error("Error Fetching Details", error)
            }
        }
        fetchDetails()
    },[id])

    const handleClick=()=>
    {
      const fullName =contact.fisrt_name + contact.last_name
        navigate(`/send/${fullName}`)
    }
  return (
   <div className="detail-container">
    <div className="card1">
    <div className="card-header1">
      Contact Details
    </div>
    <div className="card-body1">
      <p>First name : {contact.fisrt_name} </p>
      <p>Last Name:  {contact.last_name} </p>
      <p>Mobile: : {contact.mobile_Number} </p>
     
    
      
     
      
    </div>
    <button onClick={handleClick}>Send Message</button>
  </div>
  </div>
  )
}

export default Details
