 
import { Box, Container, Grid, Typography, Link, IconButton, Divider, useTheme } from "@mui/material"
import { Facebook, Twitter, Instagram, LinkedIn, Email, Phone, LocationOn } from "@mui/icons-material"

const Footer = () => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        bgcolor: theme.palette.mode === "dark" ? "background.paper" : "#f5f5f5",
        py: 6,
        borderTop: `1px solid ${theme.palette.divider}`,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              EV Motors
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Leading the electric revolution with innovative, sustainable mobility solutions for a greener tomorrow.
            </Typography>
            <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
              <IconButton size="small" color="primary">
                <Facebook />
              </IconButton>
              <IconButton size="small" color="primary">
                <Twitter />
              </IconButton>
              <IconButton size="small" color="primary">
                <Instagram />
              </IconButton>
              <IconButton size="small" color="primary">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" color="text.secondary" display="block" sx={{ mb: 1 }}>
              Home
            </Link>
            <Link href="/about" color="text.secondary" display="block" sx={{ mb: 1 }}>
              About Us
            </Link>
            <Link href="/products" color="text.secondary" display="block" sx={{ mb: 1 }}>
              Products
            </Link>
            <Link href="/contact" color="text.secondary" display="block" sx={{ mb: 1 }}>
              Contact
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Support
            </Typography>
            <Link href="/faq" color="text.secondary" display="block" sx={{ mb: 1 }}>
              FAQs
            </Link>
            <Link href="/terms" color="text.secondary" display="block" sx={{ mb: 1 }}>
              Terms & Conditions
            </Link>
            <Link href="/privacy" color="text.secondary" display="block" sx={{ mb: 1 }}>
              Privacy Policy
            </Link>
            <Link href="/warranty" color="text.secondary" display="block" sx={{ mb: 1 }}>
              Warranty
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Box sx={{ display: "flex", mb: 1 }}>
              <LocationOn color="primary" sx={{ mr: 1 }} />
              <Typography variant="body2" color="text.secondary">
                123 EV Street, Green City, 10001
              </Typography>
            </Box>
            <Box sx={{ display: "flex", mb: 1 }}>
              <Phone color="primary" sx={{ mr: 1 }} />
              <Typography variant="body2" color="text.secondary">
                +1 (555) 123-4567
              </Typography>
            </Box>
            <Box sx={{ display: "flex", mb: 1 }}>
              <Email color="primary" sx={{ mr: 1 }} />
              <Typography variant="body2" color="text.secondary">
                info@evmotors.com
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 4, mb: 4 }} />

        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} EV Motors. All rights reserved.
          </Typography>
          <Box>
            <Link href="/terms" color="text.secondary" sx={{ mr: 2 }}>
              Terms
            </Link>
            <Link href="/privacy" color="text.secondary">
              Privacy
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer

