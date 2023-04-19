const initialstate = {
    vendors:[],
}

const vendorReducer = (state = initialstate , action) =>{
    switch(action.type){
        case 'VENREG_SUCCESS':
            return{
                ...state,
                vendors:action.payload
            }
        case 'GETVEN_SUCCESS':
            return {
                ...state,
                vendors:action.payload,
            }
    
        default:
            return state;
    }
}

export default vendorReducer;