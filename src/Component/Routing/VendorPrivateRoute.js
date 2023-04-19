import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const VendorPrivateRoute = ({children}) => {
    const navigate = useNavigate()
    const [token,setToken]=useState('')
    useEffect(()=>{
      setToken(localStorage.getItem('VendorToken'))
    },[])
  return (
    <>
    <div>VendorPrivateRoute</div>
    {(token) ? children : navigate('/vendor-login')}
    </>
  )
}

export default VendorPrivateRoute