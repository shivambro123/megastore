import axios from 'axios';
export const getCategory = () =>{
    return (dispatch) =>{
        dispatch({type:'GETCAT_INITIATED'})
        return axios.get('http://localhost:5000/category/get-category')
        .then(res=>{
            console.log(res)
            dispatch({type:'GETCAT_SUCCESS',payload:res.data})
        })
        .catch(err=>{
            console.log(err)
            dispatch({type:'GETCAT_FAILED',payload:err})
        })
    }
}

export const addCategory = (value) =>{
    return (dispatch) =>{
        dispatch({type:'ADDCAT_SINGLE_INITIATED'})
        return axios.post('http://localhost:5000/admin/add-category/',value)
        .then(res=>{
            console.log(res.data.data)
            dispatch({type:'ADDSINGLECAT_SUCCESS',payload:res.data.data})
        })
        .catch(err=>{
            console.log(err)
            dispatch({type:'ADDSINGLECAT_FAILED',payload:err})
        })
    }
}

export const getSingleCategory = (id) =>{
    return (dispatch) =>{
        dispatch({type:'GETCAT_SINGLE_INITIATED'})
        return axios.get('http://localhost:5000/category/get-category/'+id)
        .then(res=>{
            console.log(res.data)
            dispatch({type:'GETSINGLECAT_SUCCESS',payload:res.data})
        })
        .catch(err=>{
            console.log(err)
            dispatch({type:'GETSINGLECAT_FAILED',payload:err})
        })
    }
}

export const editCategory = (id,value) =>{
    return (dispatch)=>{
        return axios.patch('http://localhost:5000/admin/update-category/'+id,value)
        .then(res => {
            console.log(res)
            dispatch({type:'EDITCATEGORY',payload:{productId:id,updatedData:res.data}})
        })
    }
}

export const deleteoneCategory = (id) =>{
    return (dispatch)=>{
        return axios.delete(`http://localhost:5000/admin/delete-category/${id}`)
        .then(res => {
            console.log(res.data)
            dispatch({type:'DELETECAT',payload:id})
        })
    }
}



