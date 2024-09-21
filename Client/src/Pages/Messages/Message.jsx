import React from 'react'
import { useEffect } from 'react'
import { getallMessages } from '../../actions/messages'
import { useDispatch, useSelector } from 'react-redux'
function Message() {
    const dispatch= useDispatch()
    useEffect(()=>
    {
        dispatch(getallMessages())
    }, [dispatch])

    const allMessages = useSelector(state=>state.messageReducer.data)
   

    if(!allMessages || allMessages.length===0)
    {
        return <div>Loading logs...</div>
    }

  return (
    <div className="contact-container" >
      {
        allMessages.map((message, index)=>
        (



<div className="card" key={index}>
                <div className="card-header" >
                 Message
                </div>
                <div className="card-body">
                  <h5 className="card-title"> Contact name: {message.contact_name} </h5>
                  <h5 className="card-title"> OTP sent:{message.otp} </h5>
                  <h5 className="card-title"> Time: {message.dataSent} </h5>

                 
                 
                </div>
              </div>
             


            
        ))
      }
     </div>
  )
}

export default Message
