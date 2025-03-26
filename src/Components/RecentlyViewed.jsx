 

import { useState, useEffect } from "react"
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
  useTheme,
} from "@mui/material"
import { ElectricCar } from "@mui/icons-material"
import { motion } from "framer-motion"
import ProductModal from "./ProductModal"

const MotionCard = motion(Card)

const RecentlyViewed = () => {
  const theme = useTheme()
  const [recentProducts, setRecentProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  // Simulate fetching recently viewed products from localStorage
  useEffect(() => {
    // In a real app, you would get this from localStorage or a state management solution
    const mockRecentlyViewed = [
      {
        id: 2,
        name: "EV SUV Pro",
        shortDescription: "Versatile electric SUV with seating for seven and 400+ mile range.",
        price: 69999,
        image: "/Car.png",
        images: [
          "https://source.unsplash.com/random/600x400/?electric-suv",
          "https://source.unsplash.com/random/600x400/?tesla-model-x",
          "https://source.unsplash.com/random/600x400/?suv-interior",
        ],
        availability: true,
        specs: {
          range: 410,
          topSpeed: 155,
          acceleration: 3.8,
          battery: 100,
        },
        features: [
          "Falcon Wing Doors",
          "Autopilot",
          "Third Row Seating",
          "HEPA Air Filtration",
          "Premium Audio",
          "Towing Capability",
          "Adaptive Lighting",
          "Self-Parking",
        ],
      },
      {
        id: 3,
        name: "EV Sedan",
        shortDescription: "Affordable electric sedan with 350+ mile range and modern features.",
        price: 44999,
        image: "/Car1.png",
        images: [
          "https://source.unsplash.com/random/600x400/?electric-sedan",
          "https://source.unsplash.com/random/600x400/?tesla-model-3",
          "https://source.unsplash.com/random/600x400/?sedan-interior",
        ],
        availability: true,
        specs: {
          range: 358,
          topSpeed: 140,
          acceleration: 5.3,
          battery: 75,
        },
        features: [
          '15" Touchscreen',
          "Autopilot Hardware",
          "Minimalist Interior",
          "Over-the-air Updates",
          "Glass Roof",
          "Dual Motor Option",
          "Voice Commands",
          "Mobile App Control",
        ],
      },
    ]

    setRecentProducts(mockRecentlyViewed)
  }, [])

  const handleLearnMore = (product) => {
    setSelectedProduct(product)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  if (recentProducts.length === 0) return null

  return (
    <Box sx={{ py: 6, bgcolor: theme.palette.mode === "dark" ? "background.default" : "white" }}>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4 }}>
          Recently Viewed
        </Typography>

        <Grid container spacing={3}>
          {recentProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <MotionCard
                sx={{ height: "100%", display: "flex", flexDirection: "column" }}
                initial={{ opacity: 0, x: -50 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: index * 0.2,
                    duration: 0.5,
                  },
                }}
              >
                <CardMedia component="img" height="140" image={product.image} alt={product.name} />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="h3">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.shortDescription}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" startIcon={<ElectricCar />} onClick={() => handleLearnMore(product)}>
                    View Details
                  </Button>
                </CardActions>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      <ProductModal open={modalOpen} handleClose={handleCloseModal} product={selectedProduct} />
    </Box>
  )
}

export default RecentlyViewed

