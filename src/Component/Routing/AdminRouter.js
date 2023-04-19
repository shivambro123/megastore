import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminRouter = ({children}) => {
    const navigate = useNavigate()
    const [token,setToken]=useState('')

    useEffect(()=>{
      setToken(localStorage.getItem('AdminToken'))
    },[])
      return (
    <>
    { (token) ? children : navigate('/admin-login')}
    </>
  )
}

export default AdminRouter