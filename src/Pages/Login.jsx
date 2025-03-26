 

import { useState } from "react"
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Tabs,
  Tab,
  Link,
  Divider,
  InputAdornment,
  IconButton,
  Alert,
  CircularProgress,
} from "@mui/material"
import { Visibility, VisibilityOff, Email, Lock, Person } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../Contexts/AuthContext"
import { motion } from "framer-motion"

const MotionPaper = motion(Paper)

const Login = () => {
  const [tab, setTab] = useState(0)
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const { login, register } = useAuth()

  // Login form state
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  })

  // Register form state
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleTabChange = (event, newValue) => {
    setTab(newValue)
    setError("")
  }

  const handleLoginChange = (e) => {
    const { name, value } = e.target
    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleRegisterChange = (e) => {
    const { name, value } = e.target
    setRegisterForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      await login(loginForm.email, loginForm.password)
      navigate("/")
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleRegisterSubmit = async (e) => {
    e.preventDefault()
    setError("")

    // Validate passwords match
    if (registerForm.password !== registerForm.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    setLoading(true)

    try {
      await register(registerForm.name, registerForm.email, registerForm.password)
      navigate("/")
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <MotionPaper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        elevation={3}
        sx={{ borderRadius: 2, overflow: "hidden" }}
      >
        <Tabs
          value={tab}
          onChange={handleTabChange}
          variant="fullWidth"
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Tab label="Login" />
          <Tab label="Register" />
        </Tabs>

        <Box sx={{ p: 4 }}>
          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}

          {tab === 0 ? (
            // Login Form
            <Box component="form" onSubmit={handleLoginSubmit}>
              <Typography variant="h5" component="h1" gutterBottom>
                Welcome Back
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Sign in to your account to continue
              </Typography>

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={loginForm.email}
                onChange={handleLoginChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                value={loginForm.password}
                onChange={handleLoginChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton aria-label="toggle password visibility" onClick={togglePasswordVisibility} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Box sx={{ textAlign: "right", mt: 1 }}>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Box>

              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, py: 1.5 }} disabled={loading}>
                {loading ? <CircularProgress size={24} /> : "Sign In"}
              </Button>

              <Divider sx={{ my: 3 }}>
                <Typography variant="body2" color="text.secondary">
                  OR
                </Typography>
              </Divider>

              <Box sx={{ textAlign: "center" }}>
                <Typography variant="body2" color="text.secondary">
                  Don't have an account?{" "}
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      setTab(1)
                    }}
                  >
                    Sign Up
                  </Link>
                </Typography>
              </Box>
            </Box>
          ) : (
            // Register Form
            <Box component="form" onSubmit={handleRegisterSubmit}>
              <Typography variant="h5" component="h1" gutterBottom>
                Create an Account
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Join us to explore our electric vehicles
              </Typography>

              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Full Name"
                name="name"
                autoComplete="name"
                autoFocus
                value={registerForm.name}
                onChange={handleRegisterChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={registerForm.email}
                onChange={handleRegisterChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="new-password"
                value={registerForm.password}
                onChange={handleRegisterChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton aria-label="toggle password visibility" onClick={togglePasswordVisibility} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                autoComplete="new-password"
                value={registerForm.confirmPassword}
                onChange={handleRegisterChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                }}
              />

              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, py: 1.5 }} disabled={loading}>
                {loading ? <CircularProgress size={24} /> : "Sign Up"}
              </Button>

              <Divider sx={{ my: 3 }}>
                <Typography variant="body2" color="text.secondary">
                  OR
                </Typography>
              </Divider>

              <Box sx={{ textAlign: "center" }}>
                <Typography variant="body2" color="text.secondary">
                  Already have an account?{" "}
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      setTab(0)
                    }}
                  >
                    Sign In
                  </Link>
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      </MotionPaper>
    </Container>
  )
}

export default Login

