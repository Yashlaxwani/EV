import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';

function ProductsPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Our Electric Vehicle Range
      </Typography>
      
      <Typography paragraph>
        Discover our full lineup of cutting-edge electric vehicles designed for the modern driver.
      </Typography>
      
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {[
          { id: 1, name: "EV Spark", desc: "Compact city car with 250 mile range", price: "$29,999" },
          { id: 2, name: "EV Horizon", desc: "Midsize crossover with 300 mile range", price: "$39,999" },
          { id: 3, name: "EV Aurora", desc: "Luxury sedan with 350 mile range", price: "$49,999" },
          { id: 4, name: "EV Voyager", desc: "Family SUV with 320 mile range", price: "$52,999" },
          { id: 5, name: "EV Thunder", desc: "Performance vehicle with 280 mile range", price: "$59,999" },
          { id: 6, name: "EV Venture", desc: "Off-road capable with 290 mile range", price: "$47,999" }
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
                <Typography paragraph>
                  {car.desc}
                </Typography>
                <Typography variant="h6" color="primary">
                  Starting at {car.price}
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProductsPage;