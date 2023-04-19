import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PrivateRouter = ({children}) => {
    const navigate = useNavigate()
    const [token,setToken] = useState('')
    useEffect(()=>{
      setToken(localStorage.getItem('Token'))
    },[])
  return (
    <div>
       { (token) ? children : navigate('/login')}   
    </div>
  )
}

export default PrivateRouter