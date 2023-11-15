// import { useState , createContext , useContext, useEffect } from "react"

// const Context = createContext()

// export const AuthProvider = ({children}) => {


//     const [user , setUser] = useState(JSON.parse(localStorage.getItem('user')) || false)
//     const [register , setRegister] = useState(JSON.parse(localStorage.getItem('register')) || false)
//     const [mail , setMail] = useState(JSON.parse(localStorage.getItem('register')) || false) 
 

//     const data = {
//         user ,
//         setUser ,
//         register ,
//         setRegister , 
//         mail ,
//         setMail
//     }

//     useEffect (() => {
//       localStorage.setItem('user' , JSON.stringify(user)) // login olduğunda giriş bilgilerini belleğe kaydetmek için
//     },[user])

//     useEffect (() => {
//       localStorage.setItem('mail' , JSON.stringify(mail)) // login olduğunda giriş bilgilerini belleğe kaydetmek için
//     },[mail])
//   return (
//     <Context.Provider value={data}>
//         {children}
//     </Context.Provider>
//   )
// }

// export const useAuth = () => useContext(Context)

