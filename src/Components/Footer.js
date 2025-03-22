import React from 'react';
import { Box, Container, Typography } from '@mui/material';

function Footer() {
  return (
    <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: 'rgba(0, 0, 0, 0.03)' }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} EV Motors. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;