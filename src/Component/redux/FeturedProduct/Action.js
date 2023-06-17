import axios from "axios"

export const getfeaturedProduct = () =>{
    return (dispatch) =>{
        dispatch({type:'GET_FEATUREPRODUCT_INITIATED'})
        return axios.get('http://localhost:5000/product/get-product')
        .then(res =>{
            console.log('===>',res.data);
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
            console.log('get',res.data);
            dispatch({type:'GET_CART',payload:res.data})
        })
        .catch(err=>{
            console.log(err)
        })
    }
}


export const addCart = (productId,userID,quantity) =>{
    console.log(quantity,'quant')
    return (dispatch)=>{
        dispatch({type:'REG_INITIATED'})
        return axios.post('http://localhost:5000/cart/add-to-cart',{productID:productId,userID:userID,quantity:quantity})
        .then(res=>{
            console.log(res.data,productId,userID);
            dispatch({type:'ADD_TOCART',payload:res.data,message:res.data.message,quantity:quantity})   
        })
        .catch(err=>{
            console.log(err)
           
        })
    }
}

export const addProduct = (value) =>{
    return (dispatch) =>{
        return axios.post("http://localhost:5000/admin/add-product/",value)
        .then(res => {
            console.log(res.data)
            dispatch({type:'ADD_PRODUCT',payload:res.data})
        })
    }

}

export const editItem = (id,quantity) =>{
    console.log(id,'id')
    return (dispatch)=>{
        return axios.patch(`http://localhost:5000/cart/update-cart/${id}`,{quantity:quantity})
        .then(res=>{
            console.log(res.data)
            dispatch({type:'EDIT_QUANTITY',payload:quantity})
        })
    }
}

export const removeItem = (id) =>{
    return (dispatch)=>{
        return axios.delete(`http://localhost:5000/cart/delete-item/${id}`)
        .then(res=>{
            console.log(res.data);
            console.log(id,'id');
            dispatch({type:'REMOVE',payload:id})
        })
        .catch(err=>{
            console.log(err)
        })
    }

}

export const removeAll = (userId) =>{
    return (dispatch)=>{
        return axios.delete(`http://localhost:5000/cart/delete-user-cart/${userId}`)
        .then(res=>{
            console.log(res.data.message)
            dispatch({type:'REMOVEALL',payload:userId,message:res.data.message})
        })
        .catch(err=>{
            console.log(err)    
        })
    }
}

