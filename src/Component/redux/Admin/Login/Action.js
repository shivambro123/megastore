import axios from 'axios'

export const adminRegister = (data) =>{
    return (dispatch)=>{
        dispatch({type:'REG_INITIATED'})
        return axios.post('http://localhost:5000/admin/register',data)
        .then(res =>{
            console.log(res.data)
            dispatch({type:'REG_SUCCESS',payload:res.data})
        })
        .catch(err=>{
            console.log(err);
            dispatch({type:'REG_FAILED',payload:err})
        })
    }
}

export const getAdmin = () =>{
    return (dispatch)=>{
        dispatch({type:'GETADMIN_FAILED'})
        return axios.get('http://localhost:5000/admin/get-admin')
        .then(res=>{
            console.log(res.data);
            dispatch({type:'GETADMIN_SUCCESS',payload:res.data})
         })
         .catch(err=>{
            console.log(err);
            dispatch({type:'GETADMIN_FAILED',payload:err})
         })
    }
}

export const adminLogin = (data,navigate) =>{
    return (dispatch)=>{
        dispatch({type:'ADMLOGIN_INITIATED'})
        return axios.post('http://localhost:5000/admin/login',data)
        .then(res=>{
            console.log(res)
            localStorage.setItem('AdminToken',res.data.token)
            dispatch({type:'ADMLOGIN_SUCCESS',payload:res.data})
            if(res.status == 200){
                navigate('/admin');
            }
            else{
                navigate('/admin-login');
            }
            
        })
        .then(err=>{
            console.log(err);
            dispatch({type:'ADMLOGIN_FAILED',payload:err})
        })
    }
}