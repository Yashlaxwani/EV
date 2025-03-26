 
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  useTheme,
} from "@mui/material"
import { ArrowForward } from "@mui/icons-material"
import { motion } from "framer-motion"

const MotionCard = motion(Card)

const newsItems = [
  {
    id: 1,
    title: "Introducing the New EV Roadster 2.0",
    summary: "Our flagship sports car gets an upgrade with extended range and even faster acceleration.",
    image: "/Car1.png",
    date: "March 15, 2023",
    category: "New Release",
  },
  {
    id: 2,
    title: "Expanding Our Charging Network",
    summary:
      "We're adding 500 new supercharging stations across North America to make long-distance travel even easier.",
      image: "/Car2.png",
    date: "February 28, 2023",
    category: "Infrastructure",
  },
  {
    id: 3,
    title: "EV Motors Partners with Solar City",
    summary:
      "New partnership aims to create integrated home energy solutions combining solar power and electric vehicles.",
      image: "/Car.png",
    date: "January 10, 2023",
    category: "Partnership",
  },
]

const NewsSection = () => {
  const theme = useTheme()

  return (
    <Box sx={{ py: 8, bgcolor: theme.palette.mode === "dark" ? "background.paper" : "#f5f5f5" }}>
      <Container>
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 6 }}>
          Latest News
        </Typography>

        <Grid container spacing={4}>
          {newsItems.map((item, index) => (
            <Grid item xs={12} md={4} key={item.id}>
              <MotionCard
                sx={{ height: "100%", display: "flex", flexDirection: "column" }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.2,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
              >
                <CardMedia component="img" height="200" image={item.image} alt={item.title} />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                    <Chip label={item.category} color="primary" size="small" sx={{ borderRadius: 1 }} />
                    <Typography variant="caption" color="text.secondary">
                      {item.date}
                    </Typography>
                  </Box>
                  <Typography gutterBottom variant="h5" component="h3">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.summary}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" endIcon={<ArrowForward />}>
                    Read More
                  </Button>
                </CardActions>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default NewsSection

