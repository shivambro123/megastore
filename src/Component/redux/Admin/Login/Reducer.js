const initialState = {
    admin:{},
}

const adminReducer = (state = initialState , action) =>{
    switch(action.type){
        case 'GETADMIN_SUCCESS':
            return {
                ...state,
                admin:action.payload
            }
        default:
            return state;
    }
}

export default adminReducer