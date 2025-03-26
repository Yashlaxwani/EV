import { Box, Container, Typography, Breadcrumbs, Link } from "@mui/material"
import { NavigateNext } from "@mui/icons-material"
import AboutSections from "../Components/AboutSections"

const About = () => {
  return (
    <Box>
      <Box sx={{ bgcolor: "background.paper", py: 2 }}>
        <Container>
          <Breadcrumbs separator={<NavigateNext fontSize="small" />} aria-label="breadcrumb">
            <Link color="inherit" href="/">
              Home
            </Link>
            <Typography color="text.primary">About Us</Typography>
          </Breadcrumbs>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "background.default", py: 4 }}>
        <Container>
          <Typography variant="h2" component="h1" align="center" gutterBottom>
            About EV Motors
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            paragraph
            sx={{ maxWidth: 800, mx: "auto", mb: 6 }}
          >
            Leading the electric revolution with innovative, sustainable mobility solutions for a greener tomorrow.
          </Typography>
        </Container>
      </Box>

      <AboutSections />
    </Box>
  )
}

export default About

