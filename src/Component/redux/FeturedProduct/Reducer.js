const initialState = {
    product:[],
}

const featuredProductReducer = (state = initialState , action) =>{
    switch(action.type){
        case 'GET_FEATUREPRODUCT':
            return {
                ...state,
                product:action.payload
            }
        default:
            return state;
    }
}

export default featuredProductReducer;