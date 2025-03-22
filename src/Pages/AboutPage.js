import React from 'react';
import { Container, Typography, Grid, Card } from '@mui/material';

function AboutPage() {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        About EV Motors
      </Typography>
      
      <Typography paragraph>
        Founded in 2020, EV Motors is dedicated to accelerating the world's transition to sustainable transportation through electric vehicles that don't compromise on performance, design, or affordability.
      </Typography>
      
      <Typography paragraph>
        Our mission is to create electric vehicles that inspire drivers to make the switch from conventional gas-powered cars. We believe that the future of transportation is electric, and we're committed to leading the charge.
      </Typography>
      
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Our Values
      </Typography>
      
      <Grid container spacing={4}>
        {[
          { title: "Sustainability", desc: "We're committed to reducing carbon emissions and building a cleaner future." },
          { title: "Innovation", desc: "Our team is constantly pushing boundaries to develop new EV technologies." },
          { title: "Accessibility", desc: "We believe electric vehicles should be available to everyone, not just luxury buyers." }
        ].map((value, index) => (
          <Grid item key={index} xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 2 }}>
              <Typography variant="h6" gutterBottom>
                {value.title}
              </Typography>
              <Typography variant="body2">
                {value.desc}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      <Typography variant="h5" gutterBottom sx={{ mt: 6 }}>
        Our Team
      </Typography>
      
      <Typography paragraph>
        Our team consists of automotive experts, electrical engineers, software developers, and sustainability advocates who share a common vision: to create exceptional electric vehicles that drivers love.
      </Typography>
    </Container>
  );
}

export default AboutPage;