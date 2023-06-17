const initialState = {
    category:[],
    singlecategory:{},
}

const categoryReducer = (state = initialState,action)=>{
    switch(action.type){
        case 'GETCAT_SUCCESS':
            return{
                ...state,
                category:action.payload
            }
        case 'GETSINGLECAT_SUCCESS':
            return {
                ...state,
                singlecategory:action.payload
            }
        case 'EDITCATEGORY':
            const { productId, updatedData } = action.payload;
            console.log(updatedData)
            const updatedProducts = state.category.map(product => {
              if (product.id === productId) {
                return {
                  ...product,
                  ...updatedData
                };
              }
              return product;
            });
            return {
              ...state,
              category: updatedProducts
            };
        case 'ADDSINGLECAT_SUCCESS':
            return {
                ...state,
                category:[...state.category,action.payload]
            }
            
        case 'DELETECAT':
            console.log(action.payload)
            return {
                ...state,
                category:state?.category?.data?.filter((val)=>{
                    return val._id != action.payload 
                })
            }
        default:
            return state;
    }
}


export default categoryReducer;