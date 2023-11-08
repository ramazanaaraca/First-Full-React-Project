import { useState , createContext , useContext, useEffect } from "react"

const Context = createContext()

export const AuthProvider = ({children}) => {


    const [user , setUser] = useState(JSON.parse(localStorage.getItem('user')) || false) 

    const data = {
        user ,
        setUser
    }

    useEffect (() => {
      localStorage.setItem('user' , JSON.stringify(user)) // login olduğunda giriş bilgilerini belleğe kaydetmek için
    },[user])

  return (
    <Context.Provider value={data}>
        {children}
    </Context.Provider>
  )
}

export const useAuth = () => useContext(Context)

