import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const AuthContext=createContext()
const AuthProvider = ({children}) => {
  const navigate = useNavigate()
    const [isLoggedIn,setIsLoggedIn] = useState(!!localStorage.getItem("isLoggedIn"))
    console.log("isLoggedIn==>",isLoggedIn)
    const userName = localStorage.getItem("username")
   const handleLogout = ()=>{
    localStorage.removeItem("access")
    localStorage.removeItem("refresh")
    localStorage.removeItem("username")
    localStorage.removeItem("isLoggedIn")
    navigate('/')
   }
  return (
      <>




    <AuthContext.Provider value={{isLoggedIn,userName,handleLogout}}>
        {children}
    </AuthContext.Provider>
    </>
  )
}

export default AuthProvider
export {AuthContext}