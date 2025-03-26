 

import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  // Check if user is already logged in (from localStorage in this example)
  useEffect(() => {
    const user = localStorage.getItem("user")
    if (user) {
      setCurrentUser(JSON.parse(user))
      setIsAuthenticated(true)
    }
    setLoading(false)
  }, [])

  // Login function
  const login = (email, password) => {
    // In a real app, you would make an API call to authenticate
    // This is a simplified example
    return new Promise((resolve, reject) => {
      // Simulate API call
      setTimeout(() => {
        if (email === "user@example.com" && password === "password") {
          const user = {
            id: "1",
            name: "John Doe",
            email: email,
            avatar: "https://randomuser.me/api/portraits/men/1.jpg",
          }

          setCurrentUser(user)
          setIsAuthenticated(true)
          localStorage.setItem("user", JSON.stringify(user))
          resolve(user)
        } else {
          reject(new Error("Invalid email or password"))
        }
      }, 1000)
    })
  }

  // Register function
  const register = (name, email, password) => {
    // In a real app, you would make an API call to register
    return new Promise((resolve, reject) => {
      // Simulate API call
      setTimeout(() => {
        const user = {
          id: "1",
          name: name,
          email: email,
          avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        }

        setCurrentUser(user)
        setIsAuthenticated(true)
        localStorage.setItem("user", JSON.stringify(user))
        resolve(user)
      }, 1000)
    })
  }

  // Logout function
  const logout = () => {
    setCurrentUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem("user")
  }

  const value = {
    currentUser,
    isAuthenticated,
    loading,
    login,
    register,
    logout,
  }

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}

