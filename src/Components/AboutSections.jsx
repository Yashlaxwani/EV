 
import { Box, Container, Typography, Grid, Paper, Button, useTheme } from "@mui/material"
import { ArrowForward } from "@mui/icons-material"
import { motion } from "framer-motion"

const MotionPaper = motion(Paper)

const AboutSections = () => {
  const theme = useTheme()

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        {/* Mission Section */}
        <Grid container spacing={6} sx={{ mb: 10 }}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography variant="h3" component="h2" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph>
                At EV Motors, our mission is to accelerate the world's transition to sustainable energy. We believe that
                a future powered by electricity is not just better for the environment, but also provides a superior
                driving experience.
              </Typography>
              <Typography variant="body1" paragraph>
                We're committed to developing and manufacturing electric vehicles that don't compromise on performance,
                safety, or utility. By proving that electric cars can be better, quicker, and more fun to drive than
                gasoline cars, we aim to inspire consumers and other automakers to make the switch to electric.
              </Typography>
              <Typography variant="body1" paragraph>
                Beyond vehicles, we're working to create an entire sustainable energy ecosystem, with integrated battery
                storage solutions and solar energy generation. Our goal is to reduce the world's reliance on fossil
                fuels and decrease carbon emissions globally.
              </Typography>
              <Button variant="outlined" color="primary" endIcon={<ArrowForward />} sx={{ mt: 2 }}>
                Learn More
              </Button>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box
                component="img"
                src="https://source.unsplash.com/random/600x400/?electric-car-factory"
                alt="EV Motors Factory"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 2,
                }}
              />
            </motion.div>
          </Grid>
        </Grid>

        {/* Vision Section */}
        <Grid container spacing={6} sx={{ mb: 10 }} direction={{ xs: "column-reverse", md: "row" }}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box
                component="img"
                src="https://source.unsplash.com/random/600x400/?futuristic-city"
                alt="Future Vision"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 2,
                }}
              />
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography variant="h3" component="h2" gutterBottom>
                Our Vision
              </Typography>
              <Typography variant="body1" paragraph>
                We envision a world where electric vehicles are the norm, not the exception. A world where clean energy
                powers our transportation, and the air in our cities is free from vehicle emissions.
              </Typography>
              <Typography variant="body1" paragraph>
                Our vision extends beyond just creating electric vehicles. We're working towards a future where
                renewable energy sources like solar and wind power our homes, businesses, and transportation systems. We
                see a world where energy storage solutions make renewable energy reliable and accessible to all.
              </Typography>
              <Typography variant="body1" paragraph>
                We're committed to pushing the boundaries of technology, design, and manufacturing to create products
                that are not only sustainable but also desirable. By making electric vehicles that people love to drive,
                we're accelerating the transition to a sustainable future.
              </Typography>
              <Button variant="outlined" color="primary" endIcon={<ArrowForward />} sx={{ mt: 2 }}>
                Our Future
              </Button>
            </motion.div>
          </Grid>
        </Grid>

        {/* Our Story Section */}
        <Box sx={{ mb: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 4 }}>
              Our Story
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12}>
                <MotionPaper
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  sx={{ p: 4, borderRadius: 2 }}
                >
                  <Typography variant="body1" paragraph>
                    EV Motors was founded in 2010 by a group of engineers and entrepreneurs who shared a passion for
                    sustainable transportation. Frustrated by the slow pace of electric vehicle adoption, they set out
                    to create electric cars that would outperform traditional combustion engine vehicles in every way.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    The early years were challenging. With limited resources, the team worked tirelessly to develop
                    their first prototype. In 2012, they unveiled the EV Roadster concept, which garnered attention for
                    its impressive performance specifications and sleek design. This initial success helped secure
                    funding for further development.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    By 2015, EV Motors had launched its first production vehicle, the original EV Sedan. The car
                    received critical acclaim for its range, performance, and technology features. The company expanded
                    rapidly, opening manufacturing facilities and showrooms across North America.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    In 2018, we introduced the EV SUV Pro, expanding our lineup to meet the needs of families and
                    adventure seekers. The following year, we launched our Supercharger network, addressing one of the
                    biggest barriers to electric vehicle adoption – charging infrastructure.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Today, EV Motors is a global leader in electric vehicle technology, with a growing presence in
                    Europe and Asia. We continue to innovate across our product line, pushing the boundaries of what's
                    possible in electric mobility. Our journey is just beginning, and we're excited about the road
                    ahead.
                  </Typography>
                </MotionPaper>
              </Grid>
            </Grid>
          </motion.div>
        </Box>

        {/* Blog Section */}
        <Box>
          <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 6 }}>
            From Our Blog
          </Typography>

          <Grid container spacing={4}>
            {[1, 2, 3].map((item, index) => (
              <Grid item xs={12} md={4} key={item}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Paper sx={{ height: "100%", overflow: "hidden", borderRadius: 2 }}>
                    <Box
                      component="img"
                      src={`https://source.unsplash.com/random/600x400/?electric-vehicle-${item}`}
                      alt={`Blog post ${item}`}
                      sx={{
                        width: "100%",
                        height: 200,
                        objectFit: "cover",
                      }}
                    />
                    <Box sx={{ p: 3 }}>
                      <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
                        {new Date(2023, item + 5, item * 5).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </Typography>
                      <Typography variant="h5" component="h3" gutterBottom>
                        {index === 0
                          ? "The Environmental Impact of Switching to Electric"
                          : index === 1
                            ? "How Battery Technology is Evolving"
                            : "The Future of Autonomous Electric Vehicles"}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {index === 0
                          ? "Discover how making the switch to an electric vehicle can significantly reduce your carbon footprint and contribute to a cleaner environment."
                          : index === 1
                            ? "Explore the latest advancements in battery technology that are extending range and reducing charging times for electric vehicles."
                            : "Learn about how self-driving technology is being integrated with electric vehicles to create the transportation system of the future."}
                      </Typography>
                      <Button color="primary" endIcon={<ArrowForward />}>
                        Read More
                      </Button>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Button variant="contained" color="primary" endIcon={<ArrowForward />}>
              View All Posts
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default AboutSections

