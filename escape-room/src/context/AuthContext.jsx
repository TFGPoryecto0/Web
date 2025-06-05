import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSupabase } from '../hooks/useSupabase'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const { supabase } = useSupabase()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  
  useEffect(() => {
    // Verificar sesión activa al cargar
    const session = supabase.auth.getSession()
    
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setUser(session.user)
      } else {
        setUser(null)
      }
      setLoading(false)
    })
  }, [])
  
  const login = (userData) => {
    setUser(userData)
  }
  
  const logout = async () => {
    await supabase.auth.signOut()
    setUser(null)
    navigate('/login')
  }
  
  const value = {
    user,
    login,
    logout,
    loading
  }
  
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}