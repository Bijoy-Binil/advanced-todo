import React, { createContext, useState } from 'react'
const AuthContext=createContext()
const AuthProvider = ({children}) => {
    const [isLoggedIn,setIsLoggedIn] = useState(!!localStorage.getItem("isLoggedIn"))
    console.log("isLoggedIn==>",isLoggedIn)
    const userName = localStorage.getItem("username")
  return (
      <>




    <AuthContext.Provider value={{isLoggedIn,userName}}>
        {children}
    </AuthContext.Provider>
    </>
  )
}

export default AuthProvider
export {AuthContext}