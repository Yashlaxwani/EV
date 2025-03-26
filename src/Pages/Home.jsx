import { Box } from "@mui/material"
import HomeCarousel from "../Components/HomeCarousel"
import FeaturedModels from "../Components/FeaturedModels"
import WhyChooseUs from "../Components/WhyChooseUs"
import FAQ from "../Components/FAQ"
import NewsSection from "../Components/NewsSection"
import CustomerReviews from "../Components/CustomerReviews"
import RecentlyViewed from "../Components/RecentlyViewed"

const Home = () => {
  return (
    <Box>
      <HomeCarousel />
      <FeaturedModels />
      <NewsSection />
      <WhyChooseUs />
      <CustomerReviews />
      <FAQ />
      <RecentlyViewed />
    </Box>
  )
}

export default Home

