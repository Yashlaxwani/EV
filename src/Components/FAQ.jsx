 
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, useTheme } from "@mui/material"
import { ExpandMore } from "@mui/icons-material"
import { motion } from "framer-motion"

const MotionAccordion = motion(Accordion)

const faqs = [
  {
    question: "What is the average range of your electric vehicles?",
    answer:
      "Our electric vehicles offer a range between 250 to 620 miles on a single charge, depending on the model. The EV Roadster has our longest range at 620 miles, while our standard EV Sedan provides 358 miles of range.",
  },
  {
    question: "How long does it take to charge the battery?",
    answer:
      "Charging times vary by model and charging method. Using our Supercharger network, you can charge up to 80% in about 30 minutes. Home charging with a Level 2 charger typically takes 6-8 hours for a full charge.",
  },
  {
    question: "Are there any government incentives for purchasing an electric vehicle?",
    answer:
      "Yes, many governments offer tax incentives for electric vehicle purchases. In the US, federal tax credits of up to $7,500 are available for qualifying vehicles, and many states offer additional incentives. We recommend checking your local regulations for specific details.",
  },
  {
    question: "What warranty comes with your electric vehicles?",
    answer:
      "All our vehicles come with a 4-year/50,000-mile basic vehicle warranty and an 8-year/150,000-mile battery and powertrain warranty. Extended warranty options are also available for purchase.",
  },
  {
    question: "How does the maintenance of an electric vehicle compare to a traditional car?",
    answer:
      "Electric vehicles require significantly less maintenance than traditional combustion engine vehicles. There are fewer moving parts, no oil changes, and regenerative braking reduces wear on brake pads. Regular maintenance includes tire rotation, cabin air filter replacement, and software updates.",
  },
  {
    question: "Do you offer test drives?",
    answer:
      "Yes, we offer test drives at all our showrooms. You can schedule a test drive through our website or by contacting your nearest showroom directly. We also occasionally host test drive events in various locations.",
  },
]

const FAQ = () => {
  const theme = useTheme()

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 6 }}>
          Frequently Asked Questions
        </Typography>

        <Box sx={{ maxWidth: 800, mx: "auto" }}>
          {faqs.map((faq, index) => (
            <MotionAccordion
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: index * 0.1,
                  duration: 0.5,
                },
              }}
              viewport={{ once: true }}
              sx={{
                mb: 2,
                "&:before": {
                  display: "none",
                },
                borderRadius: 1,
                overflow: "hidden",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{
                  bgcolor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.03)",
                }}
              >
                <Typography variant="h6">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">{faq.answer}</Typography>
              </AccordionDetails>
            </MotionAccordion>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default FAQ

