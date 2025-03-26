 
import { Box, Container, Typography, Card, CardContent, Avatar, Rating, useTheme } from "@mui/material"
import { FormatQuote } from "@mui/icons-material"
import Carousel from "react-material-ui-carousel"
import { motion } from "framer-motion"

const MotionCard = motion(Card)

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
    review:
      "I've been driving my EV Sedan for 6 months now and I'm absolutely in love with it. The range is impressive, and I love the tech features. Charging at home is so convenient, and I haven't missed going to gas stations at all!",
    position: "Marketing Executive",
    location: "San Francisco, CA",
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5,
    review:
      "The performance of my EV Roadster is mind-blowing. The acceleration is unlike anything I've experienced before. Plus, the savings on fuel and maintenance have been substantial. Best purchase decision I've made.",
    position: "Software Engineer",
    location: "Austin, TX",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 4,
    review:
      "Our family loves the EV SUV Pro. There's plenty of space for our kids and gear, and the safety features give me peace of mind. The only reason for 4 stars instead of 5 is that I wish there were more charging stations in our area.",
    position: "Healthcare Professional",
    location: "Denver, CO",
  },
  {
    id: 4,
    name: "David Wilson",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    rating: 5,
    review:
      "Switching to an electric vehicle was the best decision. My EV Sedan is quiet, powerful, and the over-the-air updates keep adding new features. The autopilot feature makes my commute so much more relaxing.",
    position: "Financial Analyst",
    location: "Chicago, IL",
  },
  {
    id: 5,
    name: "Jessica Patel",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    rating: 5,
    review:
      "I was hesitant about going electric, but after test driving the EV SUV Pro, I was sold. The performance is exceptional, and I love contributing to a cleaner environment. The customer service has been outstanding too.",
    position: "Environmental Scientist",
    location: "Portland, OR",
  },
]

const CustomerReviews = () => {
  const theme = useTheme()

  const renderReviews = () => {
    const reviewsPerSlide = window.innerWidth < 600 ? 1 : window.innerWidth < 960 ? 2 : 3
    const slides = []

    for (let i = 0; i < reviews.length; i += reviewsPerSlide) {
      const slideReviews = reviews.slice(i, i + reviewsPerSlide)
      slides.push(slideReviews)
    }

    return slides.map((slideReviews, slideIndex) => (
      <Box key={slideIndex} sx={{ display: "flex", gap: 2, p: 1, height: "100%" }}>
        {slideReviews.map((review, reviewIndex) => (
          <MotionCard
            key={review.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: reviewIndex * 0.2,
                duration: 0.5,
              },
            }}
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              height: "100%",
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex", mb: 2 }}>
                <Avatar src={review.avatar} alt={review.name} sx={{ width: 60, height: 60, mr: 2 }} />
                <Box>
                  <Typography variant="h6" component="h3">
                    {review.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {review.position} • {review.location}
                  </Typography>
                  <Rating value={review.rating} readOnly precision={0.5} />
                </Box>
              </Box>

              <Box sx={{ position: "relative", flex: 1 }}>
                <FormatQuote
                  sx={{
                    position: "absolute",
                    top: -10,
                    left: -5,
                    color: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
                    fontSize: 40,
                    transform: "rotate(180deg)",
                  }}
                />
                <Typography variant="body1" sx={{ pl: 3, pr: 1 }}>
                  {review.review}
                </Typography>
              </Box>
            </CardContent>
          </MotionCard>
        ))}
      </Box>
    ))
  }

  return (
    <Box sx={{ py: 8, bgcolor: theme.palette.mode === "dark" ? "background.paper" : "#f5f5f5" }}>
      <Container>
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 6 }}>
          What Our Customers Say
        </Typography>

        <Carousel
          animation="slide"
          navButtonsAlwaysVisible
          indicators={true}
          interval={6000}
          sx={{ height: { xs: 500, sm: 400, md: 350 } }}
        >
          {renderReviews()}
        </Carousel>
      </Container>
    </Box>
  )
}

export default CustomerReviews

