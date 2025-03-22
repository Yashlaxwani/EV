import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import { useAuth } from '../Contexts/AuthContext';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

function Header({ setOpenSignIn }) {
  const { isSignedIn } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleBookNow = () => {
    if (!isSignedIn) {
      setOpenSignIn(true);
    } else {
      navigate('/booking');
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          py: 2 
        }}
      >
        <ElectricCarIcon sx={{ mr: 1 }} />
        <Typography variant="h6">EV Motors</Typography>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} component={Link} to={item.path} sx={{ textAlign: 'center' }}>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
        <ListItem>
          <Button 
            variant="contained" 
            color="primary"
            fullWidth
            onClick={handleBookNow}
          >
            Book Now
          </Button>
        </ListItem>
        <ListItem>
          <Button 
            variant="outlined" 
            color="primary"
            fullWidth
            onClick={() => setOpenSignIn(true)}
            disabled={isSignedIn}
          >
            {isSignedIn ? 'Signed In' : 'Sign In'}
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" color="default" elevation={1}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo */}
            <Box 
              component={Link} 
              to="/"
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                textDecoration: 'none', 
                color: 'inherit',
                ml: 2
              }}
            >
              <ElectricCarIcon sx={{ display: { xs: 'flex' }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                sx={{
                  display: { xs: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                EV Motors
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            {/* Mobile menu button */}
            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                {/* Navigation Links */}
                <Box sx={{ display: 'flex', mr: 3 }}>
                  {navItems.map((item) => (
                    <Button
                      key={item.name}
                      component={Link}
                      to={item.path}
                      sx={{
                        mx: 1,
                        color: 'text.primary',
                        '&:hover': {
                          color: 'primary.main',
                          borderBottom: '2px solid',
                          borderColor: 'primary.main',
                        },
                      }}
                    >
                      {item.name}
                    </Button>
                  ))}
                </Box>
                
                {/* Action Buttons */}
                <Button 
                  variant="contained" 
                  color="primary"
                  onClick={handleBookNow}
                  sx={{ mx: 1 }}
                >
                  Book Now
                </Button>
                <Button 
                  variant="outlined" 
                  color="primary"
                  onClick={() => setOpenSignIn(true)}
                  disabled={isSignedIn}
                  sx={{ mx: 1 }}
                >
                  {isSignedIn ? 'Signed In' : 'Sign In'}
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Header;