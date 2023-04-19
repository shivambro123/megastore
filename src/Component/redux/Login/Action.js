import axios from 'axios'
import { Navigate } from 'react-router-dom'
export const getUsers = () =>{
    return (dispatch)=>{
        dispatch({type:'GET_INITIATED'})
        return axios.get('http://localhost:5000/user/get-user')
        .then(res=>{
            console.log(res.data);
            dispatch({type:'GET_USER_DATA',payload:res.data})
        })
        .catch(err=>{
            console.log(err)
            dispatch({type:'GET_FAILED',payload:err})

        })
    }
} 

export const Userlogin = (user,navigate) =>{
    return (dispatch)=>{
        dispatch({type:'LOGIN_INITIATED'})
        return axios.post('http://localhost:5000/user/login',user)
        .then(res =>{   
            console.log(res)
            localStorage.setItem('Token',res.data.token)
            // localStorage.clear()
            
            dispatch ({type:'LOGIN_SUCCESSFUL',payload:res.data})
            if(res.status == 200){
                navigate('/')
            }
            else{
                navigate('/login')
            }
        })
        .catch(err=>{
            console.log(err)
            dispatch ({type:'LOGIN_FAILED',payload:err})
        })
    }
}

export const registerUser = (data) =>{
    return (dispatch)=>{
        dispatch({type:'REG_INITIATED'})
        return axios.post('http://localhost:5000/user/register',data)
        .then(res=>{
            console.log(res);
            dispatch({type:'REG_SUCCESS',payload:res.data})
        })
        .catch(err=>{
            console.log(err)
            dispatch({type:'REG_FAILED',payload:err})
        })
    }
}