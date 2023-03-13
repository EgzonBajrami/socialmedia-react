import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
const PrivateRoutes = ({ children }) => {
  const auth = useSelector((state) => state.auth.data)

  if (auth.role !=='ADMIN') {
    return <Navigate to="/" />
  }



  return (
    <div className={auth.role}>
      {children}
    </div>
  )
}

export default PrivateRoutes