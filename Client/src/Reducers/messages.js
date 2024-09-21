const messageReducer =(state={data:[]},action)=>
    {
        switch(action.type)
        {
            case "FETCH_MESSAGE": 
            return {...state, data:action.payload}
    
            default:
                return state
        }
    }
    
    export default messageReducer