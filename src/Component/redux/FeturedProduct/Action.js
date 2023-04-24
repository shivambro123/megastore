import axios from "axios"

export const getfeaturedProduct = () =>{
    return (dispatch) =>{
        dispatch({type:'GET_FEATUREPRODUCT_INITIATED'})
        return axios.get('http://localhost:5000/product/get-product')
        .then(res =>{
            console.log(res.data);
            dispatch({type:'GET_FEATUREPRODUCT',payload:res.data})
        })
        .catch(err =>{
            console.log(err)
        })
    }
}

export const getCart = () =>{
    return (dispatch)=>{
        return axios.get('http://localhost:5000/cart/get-carts')
        .then(res =>{
            console.log(res.data);
            dispatch({type:'GET_CART',payload:res.data})
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

export const addCart = (productdata,user_id) =>{
    return (dispatch)=>{
        return axios.post('http://localhost:5000/cart/add-to-cart',productdata,user_id)
        .then(res =>{
            console.log(res)
            dispatch({type:'ADD_TOCART',payload:res.data})
        })
    }
}