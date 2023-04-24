import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCart } from '../redux/FeturedProduct/Action'

const CartComp = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getCart())
  },[])
  return (
    <div>CartComp</div>
  )
}

export default CartComp