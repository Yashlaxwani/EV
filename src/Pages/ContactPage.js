import React from 'react';
import { Container, Typography, Grid, Box, TextField, Button } from '@mui/material';

function ContactPage() {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Contact Us
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Get in Touch
          </Typography>
          
          <Typography paragraph>
            We're here to answer any questions you might have about our electric vehicles, test drives, or purchasing options.
          </Typography>
          
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth label="First Name" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth label="Last Name" />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth label="Email Address" />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth label="Subject" />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth label="Message" multiline rows={4} />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Send Message
            </Button>
          </Box>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Visit Us
          </Typography>
          
          <Typography paragraph>
            Our showrooms are open Monday through Saturday, 9am to 7pm.
          </Typography>
          
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            Headquarters
          </Typography>
          <Typography>123 Electric Avenue</Typography>
          <Typography>San Francisco, CA 94105</Typography>
          <Typography>Phone: (555) 123-4567</Typography>
          <Typography gutterBottom>Email: info@evmotors.com</Typography>
          
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            Showroom Locations
          </Typography>
          <Typography>San Francisco, CA</Typography>
          <Typography>Los Angeles, CA</Typography>
          <Typography>New York, NY</Typography>
          <Typography>Chicago, IL</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ContactPage;