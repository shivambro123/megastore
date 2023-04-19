import axios from 'axios'
export const vendorRegister = (data)=>{
    return (dispatch)=>{
        dispatch({type:'VENREG_INITIATED'})
        return axios.post('http://localhost:5000/vendor/register',data)
        .then((res)=>{
            console.log(res)
            dispatch({type:'VENREG_SUCCESS',payload:res.data})
        })
        .catch((err)=>{
            console.log(err)
            dispatch({type:'VENREG_FAILED',payload:err})
        })
    }
}

export const getVendor = () =>{
    return (dispatch)=>{
        dispatch({type:'GETVEN_INITIATED'})
        return axios.get('http://localhost:5000/vendor/get-vendor')
        .then(res=>{
            console.log(res.data)
            dispatch({type:'GETVEN_SUCCESS',payload:res.data})
        })
        .catch(err=>{
            console.log(err)
            dispatch({type:'GETVEN_FAILED',payload:err})
        })
    }
}

// export const vendorLogin = (data) =>{
//     return (dispatch)=>{
//         dispatch({type:'VENLOGIN_INITIATED'})
//         return axios.post('http://localhoat:5000/vendor/login',data)
//         .then(res=>{
//             console.log('vendor',res.data)
//             localStorage.setItem('VendorToken',res.data.token)
//             return ({type:'VENLOGIN_SUCCESS',payload:res.data})
//         })
//         .catch(err=>{
//             console.log(err)
//             return ({type:'VENLOGIN_FAILED',payload:err})
//         })
//     }
// }

export const vendorLogin = (user,navigate) =>{
    return (dispatch)=>{
        dispatch({type:'VENLOGIN_INITIATED'})
        return axios.post('http://localhost:5000/vendor/login',user)
        .then(res =>{   
            console.log(res.data)
            localStorage.setItem('VendorToken',res.data.token)
            // localStorage.clear();
            dispatch ({type:'VENLOGIN_SUCCESS',payload:res.data})
            if(res.status == 200){
                navigate('/vendor-product');
            }
            else{
                navigate('/vendor-login')
            }
        })
        .catch(err=>{
            console.log(err)
            dispatch ({type:'VENLOGIN_FAILED',payload:err})
        })
    }
}