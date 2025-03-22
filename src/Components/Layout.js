import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import SignInDialog from './SignInDialog';
import { AuthProvider } from '../Contexts/AuthContext';

function Layout({ children }) {
  const [openSignIn, setOpenSignIn] = useState(false);
  
  // Auto popup sign-in after 1 minute
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenSignIn(true);
    }, 60000); // 1 minute

    return () => clearTimeout(timer);
  }, []);

  return (
    <AuthProvider>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header setOpenSignIn={setOpenSignIn} />
        
        <Box component="main" sx={{ flexGrow: 1 }}>
          {children}
        </Box>
        
        <Footer />
        
        <SignInDialog 
          open={openSignIn} 
          onClose={() => setOpenSignIn(false)} 
        />
      </Box>
    </AuthProvider>
  );
}

export default Layout;