import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../Pages/Home/Home'
import Contacts from '../Pages/Contacts/Contacts'
import Details from '../Pages/Details/Details'
import Send from '../Pages/Send/Send'
import Message from '../Pages/Messages/Message'
function AllRoutes() {
  return (
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/allcontacts' element={<Contacts/>}/>
<Route path='/contacts/:id' element={<Details/>}/>
<Route path ='/send/:fullName' element={<Send/>}/>
<Route path='/logs' element={<Message/>}/>
</Routes>
  )
}

export default AllRoutes
