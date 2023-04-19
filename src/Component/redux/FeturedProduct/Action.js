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