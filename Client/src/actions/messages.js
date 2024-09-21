import * as api from "../api"

export const getallMessages =()=>async(dispatch)=>
    {
        try {
            const {data}= await api.getallMessages()
            dispatch({type:"FETCH_MESSAGE", payload:data})
        } catch (error) {
            console.log(error)
        }
      
    }