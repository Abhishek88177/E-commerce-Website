import { Navbar } from "react-bootstrap";
import Banners from "./Banners";
import CarouselMain from "./CarouselMain";
import Category from "./Category";
import DailyBestSeller from "./DailyBestSeller";
import ProductMain from "./ProductMain";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const HomeMain =() =>{
    return(
        <>
            {/* <Navbar /> */}
      <CarouselMain />
      <Category />
      <Banners />
      <ProductMain />
      <DailyBestSeller />
      <Testimonials />
      <Footer />
        </>
    )
}

export default HomeMain;