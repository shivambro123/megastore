const initialState = {
    users:[],
    user:{},
    error:null,
}

const loginReducer = (state = initialState , action)=>{
    switch(action.type){
        case 'GET_USER_DATA':
            return {
                ...state,
                users:action.payload
            }
        case 'REG_SUCCESS':
            return {
                ...state,
                user:action.payload
            }
        case 'LOGIN_FAILED':
           return  {
         
               error:action.payload,
            }
        default:
            return state;
    }
}

export default loginReducer;