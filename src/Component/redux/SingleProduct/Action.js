import axios from "axios"
export const getSingleProduct = (_id) =>{
    return (dispatch)=>{
        console.log(_id)
        return axios.get(`http://localhost:5000/product/get-product/${_id}`)
        .then(res=>{
            console.log(res.data);
            dispatch({type:'SINGLE_PROD',payload:res.data})
        })  
        .catch(err=>{
            console.log(err);
        }
            )
    }
}