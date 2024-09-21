import React, { useEffect, useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Contacts.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getallContacts } from '../../actions/contacts';
import { NavLink } from 'react-router-dom';
import Create from '../Create/Create';
import { deleteContact } from '../../actions/contacts';


function Contacts() {
  
    const dispatch =  useDispatch()
    useEffect(()=>
    {
        dispatch(getallContacts())
    },[dispatch])

    const allContacts = useSelector(state=>state.contactReducer.data)

   

    const handleDelete=(id)=>
    {
      dispatch(deleteContact(id))
    }
  return (
    <>
    <div className="contact-container">
   {
    allContacts.map((contact,index)=>
    (
      
<div className="card">
                <div className="card-header" key={index}>
                 Contact
                </div>
                <div className="card-body">
                  <h5 className="card-title"> {contact.fisrt_name +" " + contact.last_name} </h5>
                  <NavLink to={`/contacts/${contact._id}`} className="btn btn-info"><button className='btn'>Get Details</button></NavLink>
                 
                    <button className="btn-danger" onClick={()=>handleDelete(contact._id)}>Delete Contact</button>
                  
                </div>
              </div>
              
             
    ))
   }
   
              </div>

  
   </>
  )
}

export default Contacts
