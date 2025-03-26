 

import { useState } from "react"
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  InputBase,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material"
import { styled, alpha } from "@mui/material/styles"
import { Menu as MenuIcon, Search as SearchIcon, Brightness4, Brightness7, Favorite, Close } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { useAuth } from "../Contexts/AuthContext"
import { useWishlist } from "../Contexts/WishlistContext"

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}))

const pages = ["Home", "Products", "About", "Contact"]
const settings = ["Profile", "Dashboard", "Logout"]

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { isAuthenticated, logout } = useAuth()
  const { wishlistItems } = useWishlist()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleMenuItemClick = (setting) => {
    handleCloseUserMenu()
    if (setting === "Logout") {
      logout()
    }
  }

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2 }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          EV Motors
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <Close />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {pages.map((page) => (
          <ListItem key={page} disablePadding>
            <ListItemButton
              component={Link}
              to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
              sx={{ textAlign: "center" }}
              onClick={handleDrawerToggle}
            >
              <ListItemText primary={page} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              EV MOTORS
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleDrawerToggle}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              EV
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  component={Link}
                  to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
            </Search>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton onClick={toggleDarkMode} color="inherit">
                {darkMode ? <Brightness7 /> : <Brightness4 />}
              </IconButton>

              <IconButton component={Link} to="/wishlist" color="inherit">
                <Badge badgeContent={wishlistItems.length} color="error">
                  <Favorite />
                </Badge>
              </IconButton>

              {isAuthenticated ? (
                <Box sx={{ flexGrow: 0, ml: 1 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="User" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={() => handleMenuItemClick(setting)}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ) : (
                <Button component={Link} to="/login" color="inherit" sx={{ ml: 1 }}>
                  Login
                </Button>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  )
}

export default Navbar

