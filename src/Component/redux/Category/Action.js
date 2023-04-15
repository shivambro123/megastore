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