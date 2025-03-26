 

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
  Breadcrumbs,
  Link,
  IconButton,
  Pagination,
  Chip,
} from "@mui/material"
import { NavigateNext, Favorite, FavoriteBorder, ElectricCar } from "@mui/icons-material"
import { motion } from "framer-motion"
import ProductFilter from "../Components/ProductFilter"
import ProductModal from "../Components/ProductModal"
import { useWishlist } from "../Contexts/WishlistContext"

const MotionCard = motion(Card)

// Sample product data
const allProducts = [
  {
    id: 1,
    name: "EV Roadster",
    description: "Our flagship sports car with incredible acceleration and range.",
    shortDescription: "High-performance electric sports car with 0-60 mph in 1.9 seconds.",
    price: 89999,
    image: "https://source.unsplash.com/random/600x400/?electric-sports-car",
    images: [
      "https://source.unsplash.com/random/600x400/?electric-sports-car",
      "https://source.unsplash.com/random/600x400/?tesla-roadster",
      "https://source.unsplash.com/random/600x400/?sports-car-interior",
    ],
    availability: true,
    type: "sports",
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
    image: "https://source.unsplash.com/random/600x400/?electric-suv",
    images: [
      "https://source.unsplash.com/random/600x400/?electric-suv",
      "https://source.unsplash.com/random/600x400/?tesla-model-x",
      "https://source.unsplash.com/random/600x400/?suv-interior",
    ],
    availability: true,
    type: "suv",
    specs: {
      range: 410,
      topSpeed: 155,
      acceleration: 3.8,
      battery: 100,
    },
    features: [
      "Autopilot",
      "Falcon Wing Doors",
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
    image: "https://source.unsplash.com/random/600x400/?electric-sedan",
    images: [
      "https://source.unsplash.com/random/600x400/?electric-sedan",
      "https://source.unsplash.com/random/600x400/?tesla-model-3",
      "https://source.unsplash.com/random/600x400/?sedan-interior",
    ],
    availability: true,
    type: "sedan",
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
  {
    id: 4,
    name: "EV Compact",
    description: "Urban-friendly compact EV with nimble handling and smart features.",
    shortDescription: "Compact electric car perfect for city driving with 250+ mile range.",
    price: 32999,
    image: "https://source.unsplash.com/random/600x400/?electric-compact-car",
    images: [
      "https://source.unsplash.com/random/600x400/?electric-compact-car",
      "https://source.unsplash.com/random/600x400/?compact-car-interior",
      "https://source.unsplash.com/random/600x400/?compact-car-trunk",
    ],
    availability: true,
    type: "compact",
    specs: {
      range: 250,
      topSpeed: 120,
      acceleration: 6.5,
      battery: 55,
    },
    features: [
      "Smart Parking Assist",
      "Compact Design",
      "Regenerative Braking",
      "Heated Seats",
      "Smartphone Integration",
      "Lane Keeping Assist",
      "Automatic Emergency Braking",
      "Keyless Entry",
    ],
  },
  {
    id: 5,
    name: "EV Sedan Performance",
    description: "High-performance version of our popular sedan with dual motors and enhanced features.",
    shortDescription: "Performance-focused electric sedan with dual motors and 0-60 mph in 3.1 seconds.",
    price: 59999,
    image: "https://source.unsplash.com/random/600x400/?performance-sedan",
    images: [
      "https://source.unsplash.com/random/600x400/?performance-sedan",
      "https://source.unsplash.com/random/600x400/?sedan-interior-luxury",
      "https://source.unsplash.com/random/600x400/?car-dashboard",
    ],
    availability: true,
    type: "sedan",
    specs: {
      range: 330,
      topSpeed: 162,
      acceleration: 3.1,
      battery: 85,
    },
    features: [
      "Performance Dual Motor",
      "Sport Suspension",
      "Premium Interior",
      "Enhanced Autopilot",
      "Carbon Fiber Spoiler",
      "Performance Brakes",
      "Track Mode",
      "Premium Connectivity",
    ],
  },
  {
    id: 6,
    name: "EV SUV Standard",
    description: "More affordable version of our SUV with great range and essential features.",
    shortDescription: "Value-oriented electric SUV with 5 seats and 350+ mile range.",
    price: 54999,
    image: "https://source.unsplash.com/random/600x400/?electric-suv-standard",
    images: [
      "https://source.unsplash.com/random/600x400/?electric-suv-standard",
      "https://source.unsplash.com/random/600x400/?suv-interior-standard",
      "https://source.unsplash.com/random/600x400/?suv-trunk",
    ],
    availability: true,
    type: "suv",
    specs: {
      range: 350,
      topSpeed: 135,
      acceleration: 5.0,
      battery: 90,
    },
    features: [
      "Five-Seat Configuration",
      "Basic Autopilot",
      "Panoramic Roof",
      "Standard Sound System",
      "Power Liftgate",
      "Navigation",
      "Wireless Phone Charging",
      "Driver Assistance Features",
    ],
  },
]

const Products = () => {
  const [products, setProducts] = useState(allProducts)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [page, setPage] = useState(1)
  const [filters, setFilters] = useState({
    priceRange: [20000, 150000],
    rangeFilter: [100, 700],
    searchQuery: "",
    vehicleTypes: {
      sedan: false,
      suv: false,
      sports: false,
      compact: false,
    },
    features: {
      autopilot: false,
      premium: false,
      performance: false,
      longRange: false,
    },
  })

  const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist()

  const productsPerPage = 4

  useEffect(() => {
    applyFilters()
  }, [filters])

  const applyFilters = () => {
    let filteredProducts = [...allProducts]

    // Apply price filter
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1],
    )

    // Apply range filter
    filteredProducts = filteredProducts.filter(
      (product) => product.specs.range >= filters.rangeFilter[0] && product.specs.range <= filters.rangeFilter[1],
    )

    // Apply search query
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase()
      filteredProducts = filteredProducts.filter(
        (product) => product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query),
      )
    }

    // Apply vehicle type filters
    const selectedTypes = Object.entries(filters.vehicleTypes)
      .filter(([_, isSelected]) => isSelected)
      .map(([type]) => type)

    if (selectedTypes.length > 0) {
      filteredProducts = filteredProducts.filter((product) => selectedTypes.includes(product.type))
    }

    // Apply feature filters
    const selectedFeatures = Object.entries(filters.features)
      .filter(([_, isSelected]) => isSelected)
      .map(([feature]) => feature)

    if (selectedFeatures.length > 0) {
      filteredProducts = filteredProducts.filter((product) => {
        const productFeatures = product.features.map((f) => f.toLowerCase())
        return selectedFeatures.some((feature) => {
          if (feature === "autopilot") return productFeatures.some((f) => f.includes("autopilot"))
          if (feature === "premium") return productFeatures.some((f) => f.includes("premium"))
          if (feature === "performance") return productFeatures.some((f) => f.includes("performance"))
          if (feature === "longRange") return product.specs.range > 400
          return false
        })
      })
    }

    setProducts(filteredProducts)
    setPage(1) // Reset to first page when filters change
  }

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters)
  }

  const handleViewDetails = (product) => {
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

  const handlePageChange = (event, value) => {
    setPage(value)
  }

  // Calculate pagination
  const indexOfLastProduct = page * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)
  const pageCount = Math.ceil(products.length / productsPerPage)

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  }

  return (
    <Box>
      <Box sx={{ bgcolor: "background.paper", py: 2 }}>
        <Container>
          <Breadcrumbs separator={<NavigateNext fontSize="small" />} aria-label="breadcrumb">
            <Link color="inherit" href="/">
              Home
            </Link>
            <Typography color="text.primary">Products</Typography>
          </Breadcrumbs>
        </Container>
      </Box>

      <Container sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Our Electric Vehicles
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Explore our range of electric vehicles designed for performance, efficiency, and sustainability.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <ProductFilter onFilterChange={handleFilterChange} />
          </Grid>

          <Grid item xs={12} md={9}>
            <Box sx={{ mb: 3, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography variant="h6">
                {products.length} {products.length === 1 ? "Product" : "Products"} Found
              </Typography>
            </Box>

            {products.length === 0 ? (
              <Box sx={{ textAlign: "center", py: 8 }}>
                <Typography variant="h6" color="text.secondary">
                  No products match your filters.
                </Typography>
                <Button
                  variant="outlined"
                  sx={{ mt: 2 }}
                  onClick={() =>
                    handleFilterChange({
                      priceRange: [20000, 150000],
                      rangeFilter: [100, 700],
                      searchQuery: "",
                      vehicleTypes: {
                        sedan: false,
                        suv: false,
                        sports: false,
                        compact: false,
                      },
                      features: {
                        autopilot: false,
                        premium: false,
                        performance: false,
                        longRange: false,
                      },
                    })
                  }
                >
                  Reset Filters
                </Button>
              </Box>
            ) : (
              <>
                <Grid container spacing={3}>
                  {currentProducts.map((product, index) => (
                    <Grid item xs={12} sm={6} key={product.id}>
                      <MotionCard
                        sx={{ height: "100%", display: "flex", flexDirection: "column", cursor: "pointer" }}
                        onClick={() => handleViewDetails(product)}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <CardMedia component="img" height="200" image={product.image} alt={product.name} />
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                            <Typography gutterBottom variant="h5" component="h3">
                              {product.name}
                            </Typography>
                            <IconButton size="small" color="primary" onClick={(e) => handleWishlistToggle(product, e)}>
                              {wishlistItems.some((item) => item.id === product.id) ? <Favorite /> : <FavoriteBorder />}
                            </IconButton>
                          </Box>
                          <Typography variant="body2" color="text.secondary" paragraph>
                            {product.shortDescription}
                          </Typography>
                          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2 }}>
                            <Typography variant="h6" color="primary">
                              ${product.price.toLocaleString()}
                            </Typography>
                            <Chip
                              label={`Range: ${product.specs.range} mi`}
                              size="small"
                              color="secondary"
                              variant="outlined"
                            />
                          </Box>
                        </CardContent>
                        <CardActions>
                          <Button
                            size="small"
                            startIcon={<ElectricCar />}
                            onClick={(e) => {
                              e.stopPropagation()
                              handleViewDetails(product)
                            }}
                          >
                            View Details
                          </Button>
                        </CardActions>
                      </MotionCard>
                    </Grid>
                  ))}
                </Grid>

                {pageCount > 1 && (
                  <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                    <Pagination count={pageCount} page={page} onChange={handlePageChange} color="primary" />
                  </Box>
                )}
              </>
            )}
          </Grid>
        </Grid>
      </Container>

      <ProductModal open={modalOpen} handleClose={handleCloseModal} product={selectedProduct} />
    </Box>
  )
}

export default Products

