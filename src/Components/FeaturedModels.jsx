import { useState } from "react"
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Container,
  IconButton,
} from "@mui/material"
import { Favorite, FavoriteBorder, ElectricCar } from "@mui/icons-material"
import ProductModal from "./ProductModal"
import { useWishlist } from "../Contexts/WishlistContext"
import { motion } from "framer-motion"

const MotionCard = motion(Card)

const featuredProducts = [
  {
    id: 1,
    name: "EV Roadster",
    description: "Our flagship sports car with incredible acceleration and range.",
    shortDescription: "High-performance electric sports car with 0-60 mph in 1.9 seconds.",
    price: 89999,
    image: "/Car.png",
    images: [
      "/Car.png",
      "/Car1.png",
      "/Car2.png",
    ],
    availability: true,
    specs: {
      range: 620,
      topSpeed: 250,
      acceleration: 1.9,
      battery: 200,
    },
    features: [
      "Autopilot",
      "Glass Roof",
      "Premium Sound System",
      "Wireless Charging",
      "Heated Seats",
      "Smart Air Suspension",
      "Premium Interior",
      "Advanced Safety Features",
    ],
  },
  {
    id: 2,
    name: "EV SUV Pro",
    description: "Spacious family SUV with long range and advanced safety features.",
    shortDescription: "Versatile electric SUV with seating for seven and 400+ mile range.",
    price: 69999,
    image: "/Car1.png",
    images: [
      "/Car.png",
      "/Car1.png",
      "/Car2.png",
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
    description: "Our most affordable electric vehicle with impressive range and features.",
    shortDescription: "Affordable electric sedan with 350+ mile range and modern features.",
    price: 44999,
    image: "/Car2.png",
    images: [
      "/Car.png",
      "/Car1.png",
      "/Car2.png",
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

const FeaturedModels = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist()

  const handleLearnMore = (product) => {
    setSelectedProduct(product)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  const handleWishlistToggle = (product, event) => {
    event.stopPropagation()

    if (wishlistItems.some((item) => item.id === product.id)) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  return (
    <Box sx={{ py: 8, bgcolor: "background.default" }}>
      <Container>
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 4 }}>
          Featured Models
        </Typography>
        <Grid container spacing={4}>
          {featuredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card>
                <CardMedia component="img" height="200" image={product.image} alt={product.name} />
                <CardContent>
                  <Typography variant="h5">{product.name}</Typography>
                  <Typography variant="body2">{product.shortDescription}</Typography>
                  <Typography variant="h6">${product.price.toLocaleString()}</Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={() => handleLearnMore(product)}>Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <ProductModal open={modalOpen} handleClose={handleCloseModal} product={selectedProduct} />
    </Box>
  )
}

export default FeaturedModels
