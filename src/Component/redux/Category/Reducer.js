const initialState = {
    category:[],
}

const categoryReducer = (state = initialState,action)=>{
    switch(action.type){
        case 'GETCAT_SUCCESS':
            return{
                ...state,
                category:action.payload
            }
        default:
            return state;
    }
}

export default categoryReducer;