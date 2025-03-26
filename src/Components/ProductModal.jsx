 
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Grid,
  Chip,
  IconButton,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import { Close, Speed, BatteryChargingFull, ElectricCar, Timer, Favorite, FavoriteBorder } from "@mui/icons-material"
import Carousel from "react-material-ui-carousel"
import { useWishlist } from "../Contexts/WishlistContext"

const ProductModal = ({ open, handleClose, product }) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"))
  const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist()

  if (!product) return null

  const isInWishlist = wishlistItems.some((item) => item.id === product.id)

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullScreen={fullScreen}
      maxWidth="md"
      fullWidth
      scroll="body"
      aria-labelledby="product-dialog-title"
    >
      <DialogTitle
        id="product-dialog-title"
        sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <Typography variant="h5" component="h2">
          {product.name}
        </Typography>
        <Box>
          <IconButton onClick={handleWishlistToggle} color="primary" sx={{ mr: 1 }}>
            {isInWishlist ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
          <IconButton onClick={handleClose} aria-label="close">
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent dividers>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Carousel>
              {product.images.map((image, index) => (
                <Box
                  key={index}
                  component="img"
                  src={image}
                  alt={`${product.name} - Image ${index + 1}`}
                  sx={{
                    width: "100%",
                    height: 300,
                    objectFit: "cover",
                    borderRadius: 1,
                  }}
                />
              ))}
            </Carousel>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6" gutterBottom>
                Overview
              </Typography>
              <Typography variant="body1">{product.description}</Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="h6" gutterBottom>
                Price
              </Typography>
              <Typography variant="h4" color="primary" gutterBottom>
                ${product.price.toLocaleString()}
              </Typography>
              <Chip
                label={product.availability ? "In Stock" : "Out of Stock"}
                color={product.availability ? "success" : "error"}
                size="small"
              />
            </Box>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" gutterBottom>
              Key Specifications
            </Typography>

            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={6}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Speed color="primary" sx={{ mr: 1 }} />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Top Speed
                    </Typography>
                    <Typography variant="body1">{product.specs.topSpeed} mph</Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={6}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Timer color="primary" sx={{ mr: 1 }} />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      0-60 mph
                    </Typography>
                    <Typography variant="body1">{product.specs.acceleration} sec</Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={6}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <BatteryChargingFull color="primary" sx={{ mr: 1 }} />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Battery
                    </Typography>
                    <Typography variant="body1">{product.specs.battery} kWh</Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={6}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <ElectricCar color="primary" sx={{ mr: 1 }} />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Range
                    </Typography>
                    <Typography variant="body1">{product.specs.range} miles</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            <Divider sx={{ my: 2 }} />

            <Box>
              <Typography variant="h6" gutterBottom>
                Features
              </Typography>
              <Grid container spacing={1}>
                {product.features.map((feature, index) => (
                  <Grid item xs={6} key={index}>
                    <Typography variant="body2" sx={{ display: "flex", alignItems: "center" }}>
                      • {feature}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
        <Button variant="contained" color="primary" disabled={!product.availability}>
          {product.availability ? "Add to Cart" : "Notify Me"}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ProductModal

