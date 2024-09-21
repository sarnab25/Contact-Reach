const contactReducer =(state={data:[]},action)=>
{
    switch(action.type)
    {
        case "FETCH_CONTACT": 
        return {...state, data:action.payload}

        case "DELETE_CONTACT":
            return {...state, data:state.data.filter((contact)=>contact._id !== action.payload)}

        default:
            return state
    }
}

export default contactReducer

