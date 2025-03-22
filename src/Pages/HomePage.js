import React from 'react';
import { Container, Box, Typography, Button, Grid, Card, CardMedia, CardContent } from '@mui/material';

function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ position: 'relative', height: '60vh', mb: 4, borderRadius: 2, overflow: 'hidden' }}>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'primary.main',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            p: 4,
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom align="center">
            The Future of Driving is Electric
          </Typography>
          <Typography variant="h5" paragraph align="center">
            Explore our range of innovative and sustainable electric vehicles
          </Typography>
          <Button variant="contained" color="secondary" size="large" sx={{ mt: 2 }}>
            Discover More
          </Button>
        </Box>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ mt: 6, mb: 4 }}>
        Featured Models
      </Typography>

      <Grid container spacing={4}>
        {[
          { id: 1, name: "EV Spark", price: "$29,999", image: "car" },
          { id: 2, name: "EV Horizon", price: "$39,999", image: "car" },
          { id: 3, name: "EV Aurora", price: "$49,999", image: "car" }
        ].map((car) => (
          <Grid item key={car.id} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="div"
                sx={{ pt: '56.25%', bgcolor: 'primary.light' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {car.name}
                </Typography>
                <Typography>
                  Starting at {car.price}
                </Typography>
                <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default HomePage;