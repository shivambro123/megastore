const initialState = {
    product:[],
    cart:[]
}

const featuredProductReducer = (state = initialState , action) =>{
    switch(action.type){
        case 'GET_FEATUREPRODUCT':
            return {
                ...state,
                product:action.payload
            }
        case 'GET_CART':
            return {
                ...state,
                cart:[...state.cart,action.payload]
            }
        case 'ADD_TOCART':
            return {
                ...state,
                cart:[...state.cart,action.payload]
            }
        default:        
            return state;
    }
}

export default featuredProductReducer;