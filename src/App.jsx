 

import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { Box } from "@mui/material"

// Pages
import Home from "./Pages/Home"
import About from "./Pages/About"
import Products from "./Pages/Products"
import Login from "./Pages/Login"
import Wishlist from "./Pages/Wishlist"

// Components
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

// Contexts
import { AuthProvider } from "./Contexts/AuthContext"
import { WishlistProvider } from "./Contexts/WishlistContext"

function App() {
  const [darkMode, setDarkMode] = useState(false)

  // Check if user has a theme preference in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setDarkMode(true)
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    localStorage.setItem("theme", !darkMode ? "dark" : "light")
  }

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#2196f3",
      },
      secondary: {
        main: "#f50057",
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 700,
      },
      h2: {
        fontWeight: 700,
      },
      h3: {
        fontWeight: 600,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: "none",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            overflow: "hidden",
          },
        },
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <WishlistProvider>
          <Router>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
              }}
            >
              <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
              <Box component="main" sx={{ flexGrow: 1 }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                </Routes>
              </Box>
              <Footer />
            </Box>
          </Router>
        </WishlistProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App

