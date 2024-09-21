import * as api from "../api"

export const getallContacts =()=>async(dispatch)=>
{
    try {
        const {data}= await api.getallContacts()
        dispatch({type:"FETCH_CONTACT", payload:data})
    } catch (error) {
        console.log(error)
    }
  
}
export const deleteContact =(id)=>async(dispatch)=>
{
    try {
        await api.deleteContact(id)
        dispatch({type:"DELETE_CONTACT", payload:id})
    } catch (error) {
        console.log(error)
    }
}
