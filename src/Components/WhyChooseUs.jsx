 
import { Box, Container, Grid, Typography, Paper, useTheme } from "@mui/material"
import { ElectricCar, BatteryChargingFull, Speed, EmojiEvents, LocalAtm } from "@mui/icons-material"
import { motion } from "framer-motion"

const MotionPaper = motion(Paper)

const features = [
  {
    icon: <ElectricCar fontSize="large" />,
    title: "Cutting-Edge Technology",
    description:
      "Our vehicles feature the latest advancements in electric vehicle technology, ensuring optimal performance and efficiency.",
  },
  {
    icon: <BatteryChargingFull fontSize="large" />,
    title: "Superior Battery Life",
    description:
      "Experience industry-leading range with our advanced battery technology, taking you further on a single charge.",
  },
  {
    icon: <Speed fontSize="large" />,
    title: "Impressive Performance",
    description:
      "Enjoy rapid acceleration and responsive handling that rivals or exceeds traditional combustion engine vehicles.",
  },
  {
    icon: <EmojiEvents fontSize="large" />,
    title: "Award-Winning Design",
    description:
      "Our vehicles have received numerous accolades for their innovative design, combining aesthetics with functionality.",
  },
  {
    icon: <EmojiEvents fontSize="large" />,
    title: "Eco-Friendly",
    description: "Zero emissions and sustainable materials make our vehicles an environmentally responsible choice.",
  },
  {
    icon: <LocalAtm fontSize="large" />,
    title: "Cost Effective",
    description:
      "Save on fuel costs and maintenance while benefiting from tax incentives for electric vehicle ownership.",
  },
]

const WhyChooseUs = () => {
  const theme = useTheme()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <Box sx={{ py: 8, bgcolor: theme.palette.mode === "dark" ? "background.paper" : "#f5f5f5" }}>
      <Container>
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 6 }}>
          Why Choose Us
        </Typography>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <MotionPaper
                  variants={itemVariants}
                  sx={{
                    p: 3,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    borderRadius: 2,
                  }}
                >
                  <Box
                    sx={{
                      color: "primary.main",
                      mb: 2,
                      p: 1,
                      borderRadius: "50%",
                      bgcolor: theme.palette.mode === "dark" ? "rgba(144, 202, 249, 0.1)" : "rgba(25, 118, 210, 0.1)",
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </MotionPaper>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  )
}

export default WhyChooseUs

