import React from 'react';
import { Container, Typography, Box, Grid, TextField, Button } from '@mui/material';

function BookingPage() {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Book Your Test Drive
      </Typography>
      
      <Typography paragraph>
        Experience the thrill of driving an electric vehicle. Book a test drive at one of our showrooms today.
      </Typography>
      
      <Box component="form" noValidate sx={{ mt: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Last Name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Email Address"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Phone Number"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              required
              fullWidth
              label="Vehicle Model"
              SelectProps={{
                native: true,
              }}
            >
              <option value="">Select a model</option>
              <option value="spark">EV Spark</option>
              <option value="horizon">EV Horizon</option>
              <option value="aurora">EV Aurora</option>
              <option value="voyager">EV Voyager</option>
              <option value="thunder">EV Thunder</option>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              required
              fullWidth
              label="Showroom Location"
              SelectProps={{
                native: true,
              }}
            >
              <option value="">Select a location</option>
              <option value="sf">San Francisco, CA</option>
              <option value="la">Los Angeles, CA</option>
              <option value="ny">New York, NY</option>
              <option value="chi">Chicago, IL</option>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="date"
              label="Preferred Date"
              type="date"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              required
              fullWidth
              label="Preferred Time"
              SelectProps={{
                native: true,
              }}
            >
              <option value="">Select a time</option>
              <option value="morning">Morning (9am - 12pm)</option>
              <option value="afternoon">Afternoon (12pm - 4pm)</option>
              <option value="evening">Evening (4pm - 7pm)</option>
            </TextField>
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 3, mb: 2 }}
        >
          Book Test Drive
        </Button>
      </Box>
    </Container>
  );
}

export default BookingPage;