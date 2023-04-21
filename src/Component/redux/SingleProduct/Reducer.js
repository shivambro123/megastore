const initialState = {
    product :{}
}

const singleProduct = ( state = initialState , action) =>{
    switch(action.type){
        case 'SINGLE_PROD':
            return {
                product:action.payload
            }
        default:
            return state;
    }
}

export default singleProduct;