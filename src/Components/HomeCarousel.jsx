"use client"
import { Box, Typography, Button, Paper, useTheme } from "@mui/material"
import Carousel from "react-material-ui-carousel"
import { ArrowForward } from "@mui/icons-material"

const carouselItems = [
  {
    id: 1,
    title: "The Future of Mobility",
    description:
      "Experience the next generation of electric vehicles with cutting-edge technology and sustainable design.",
    image: "https://source.unsplash.com/random/1600x900/?electric-car",
    buttonText: "Explore Models",
    buttonLink: "/products",
  },
  {
    id: 2,
    title: "Zero Emissions, Maximum Performance",
    description: "Our electric vehicles combine environmental responsibility with exhilarating performance.",
    image: "https://source.unsplash.com/random/1600x900/?tesla",
    buttonText: "Learn More",
    buttonLink: "/about",
  },
  {
    id: 3,
    title: "Charging Network Expansion",
    description: "Access our growing network of fast-charging stations across the country for worry-free travel.",
    image: "https://source.unsplash.com/random/1600x900/?ev-charging",
    buttonText: "Find Stations",
    buttonLink: "/stations",
  },
]

const HomeCarousel = () => {
  const theme = useTheme()

  return (
    <Carousel
      animation="slide"
      navButtonsAlwaysVisible
      indicators={true}
      interval={5000}
      sx={{
        marginBottom: 4,
      }}
    >
      {carouselItems.map((item) => (
        <Paper
          key={item.id}
          sx={{
            position: "relative",
            height: { xs: "50vh", md: "70vh" },
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            borderRadius: 0,
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              maxWidth: "800px",
              padding: 4,
              animation: "fadeIn 1s ease-in",
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                mb: 2,
                fontWeight: "bold",
                fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
              }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
              }}
            >
              {item.description}
            </Typography>
            <Button
              variant="contained"
              size="large"
              color="primary"
              href={item.buttonLink}
              endIcon={<ArrowForward />}
              sx={{
                py: 1.5,
                px: 4,
                borderRadius: "30px",
              }}
            >
              {item.buttonText}
            </Button>
          </Box>
        </Paper>
      ))}
    </Carousel>
  )
}

export default HomeCarousel

