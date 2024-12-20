import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api"

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {

    try {
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data

      localStorage.setItem("@travelstour:user", JSON.stringify(user))
      localStorage.setItem("@travelstour:token", token)


      // Inseri um token do tipo Bearer no cabeçalho de todas as requisicoes que o usuario ira fazer
      api.defaults.headers.authorization = `Bearer ${token}`
      setData({ user, token }) // armazena as informacoes do usuario, dentro do state

    } catch (e) {
      if (e.response) {
        alert(e.response.data.message)
      } else {
        alert("Não foi possível logar")
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@travelstour:user")
    const token = localStorage.getItem("@travelstour:token")

    if (token || user) {
      api.defaults.headers.authorization = `Bearer ${token}`
    }
    setData({
      token,
      user: JSON.parse(user)
    })
  }, [])

  return (
    <AuthContext.Provider value={{ signIn, user: data.user }}>
      {children}
    </ AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }