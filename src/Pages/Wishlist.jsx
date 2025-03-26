 

import { useState } from "react"
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
  IconButton,
  Breadcrumbs,
  Link,
  Divider,
  Alert,
} from "@mui/material"
import { NavigateNext, Delete, ElectricCar, ShoppingCart } from "@mui/icons-material"
import { useWishlist } from "../Contexts/WishlistContext"
import { motion } from "framer-motion"
import ProductModal from "../Components/ProductModal"

const MotionCard = motion(Card)

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist()
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  const handleViewDetails = (product) => {
    setSelectedProduct(product)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
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
            <Typography color="text.primary">Wishlist</Typography>
          </Breadcrumbs>
        </Container>
      </Box>

      <Container sx={{ py: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
          <Typography variant="h3" component="h1">
            My Wishlist
          </Typography>

          {wishlistItems.length > 0 && (
            <Button variant="outlined" color="error" startIcon={<Delete />} onClick={clearWishlist}>
              Clear All
            </Button>
          )}
        </Box>

        {wishlistItems.length === 0 ? (
          <Box sx={{ textAlign: "center", py: 8 }}>
            <Alert severity="info" sx={{ mb: 3 }}>
              Your wishlist is empty.
            </Alert>
            <Typography variant="body1" paragraph>
              Browse our products and add items to your wishlist.
            </Typography>
            <Button variant="contained" color="primary" href="/products">
              Explore Products
            </Button>
          </Box>
        ) : (
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <Grid container spacing={3}>
              {wishlistItems.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <MotionCard variants={itemVariants} sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                    <CardMedia component="img" height="200" image={product.image} alt={product.name} />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h3">
                        {product.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {product.shortDescription}
                      </Typography>
                      <Typography variant="h6" color="primary">
                        ${product.price.toLocaleString()}
                      </Typography>
                    </CardContent>
                    <Divider />
                    <CardActions sx={{ justifyContent: "space-between" }}>
                      <Button size="small" startIcon={<ElectricCar />} onClick={() => handleViewDetails(product)}>
                        View Details
                      </Button>
                      <Box>
                        <IconButton
                          color="error"
                          size="small"
                          onClick={() => removeFromWishlist(product.id)}
                          aria-label="remove from wishlist"
                        >
                          <Delete />
                        </IconButton>
                        <Button
                          size="small"
                          variant="contained"
                          color="primary"
                          startIcon={<ShoppingCart />}
                          sx={{ ml: 1 }}
                        >
                          Add to Cart
                        </Button>
                      </Box>
                    </CardActions>
                  </MotionCard>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        )}
      </Container>

      <ProductModal open={modalOpen} handleClose={handleCloseModal} product={selectedProduct} />
    </Box>
  )
}

export default Wishlist

