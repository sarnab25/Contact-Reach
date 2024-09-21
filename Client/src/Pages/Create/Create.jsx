import React, { useState } from 'react'
import axios from 'axios'
import './Create.css'
function Create({setcreate}) {

    const [firstname, setfirstname]= useState("")
    const [lastname, setlastname]=useState("")
    const [phone,setphone]=useState("")

const handleSubmit=async(e)=>
{
    e.preventDefault()
const formData = new FormData()
formData.append("Firstname", firstname)
formData.append("Lastname", lastname)
formData.append("Mobile",phone)

try {
    const response =await axios.post("http://localhost:7080/contacts/create",formData,{ headers: {
        'Content-Type': 'application/json',
      },})
      console.log("Contact created", response.data)
      alert("Contact Created")
      setcreate(false)
} catch (error) {
    console.log("Error creating Contact", error)
    alert("Failed to create Contact")
}
}

const handleClose=()=>
{
    setcreate(false)
}
  return (
    <div className='createContact-container'>
        <form className='createForm' onSubmit={handleSubmit}>

    <div className="Deatail-one">
        <label htmlFor="Firstname" >First Name : {" "}</label>
        <input type="text" id="Firstname" placeholder="Enter your first name" onChange={(e)=>setfirstname(e.target.value)}/>
      </div>


      <div className="Deatail-two">
        <label htmlFor="Lastname" >Last Name : {" "} </label>
        <input type="text"  id="Lastname" placeholder="Enter your Last name"  onChange={(e)=>setlastname(e.target.value)}/>
      </div>


      <div className="Deatail-three">
        <label htmlFor="Mobile">Mobile Number : {" "} </label>
        <input type="number"  id="Mobile" placeholder="Enter your mobile number"   onChange={(e)=>setphone(e.target.value)}/>
      </div>

      <div className="create-container2"><button className="btn-create" type="submit">Create</button></div>
      <div className="btn-x" onClick={handleClose}>X</div>
    </form>
      
    </div>
  )
}

export default Create
