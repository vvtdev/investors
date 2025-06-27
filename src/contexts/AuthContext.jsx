import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Mock authentication - replace with real auth service
  useEffect(() => {
    // Simulate checking for existing session
    const savedUser = localStorage.getItem('viewervalue_user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    try {
      // Mock login - replace with real authentication
      const mockUser = {
        id: '1',
        email: email,
        name: email.split('@')[0],
        role: email.includes('admin') ? 'admin' : 'user',
        tier: 'none',
        investment: 0,
        tokens: 0,
        joinedAt: new Date().toISOString()
      }
      
      setUser(mockUser)
      localStorage.setItem('viewervalue_user', JSON.stringify(mockUser))
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const register = async (email, password, name) => {
    try {
      // Mock registration - replace with real authentication
      const mockUser = {
        id: Date.now().toString(),
        email: email,
        name: name,
        role: 'user',
        tier: 'none',
        investment: 0,
        tokens: 0,
        joinedAt: new Date().toISOString()
      }
      
      setUser(mockUser)
      localStorage.setItem('viewervalue_user', JSON.stringify(mockUser))
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('viewervalue_user')
  }

  const updateUser = (updates) => {
    const updatedUser = { ...user, ...updates }
    setUser(updatedUser)
    localStorage.setItem('viewervalue_user', JSON.stringify(updatedUser))
  }

  const value = {
    user,
    login,
    register,
    logout,
    updateUser,
    loading,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin'
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

