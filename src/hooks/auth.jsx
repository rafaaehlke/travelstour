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
      // api.defaults.headers.authorization = `Bearer ${token}`
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;  // Método novo

      setData({ user, token }) // armazena as informacoes do usuario, dentro do state

    } catch (error) {
      if (error.response) {
        alert(e.response.data.message)
      } else {
        alert("Não foi possível logar")
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@travelstour:user")
    localStorage.removeItem("@travelstour:token")

    setData({})
  }

  async function updateProfile({ user, avatarFile }) {
    try {

      if (avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append("avatar", avatarFile)

        const response = await api.patch("/users/avatar", fileUploadForm)
        user.avatar = response.data.avatar
      }

      await api.put("/users", user)
      localStorage.setItem("@travelstour:user", JSON.stringify(user))

      setData({ user, token: data.token })
      alert("Perfil Atualizado")
    } catch (error) {
      if (error.response) {
        alert(e.response.data.message)
      } else {
        alert("Não foi possível atualizar o perfil")
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@travelstour:user")
    const token = localStorage.getItem("@travelstour:token")

    if (token || user) {
      // api.defaults.headers.authorization = `Bearer ${token}` // método antigo
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;  // Método novo
    }
    setData({
      token,
      user: JSON.parse(user)
    })
  }, [])

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      updateProfile,
      user: data.user
    }}>
      {children}
    </ AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }