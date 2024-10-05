import { Divider } from "@mui/material";
import Header from "./header";
import HeroSection from "./hero-section";
import Footer from "./footer";

export const Home = () => {
  return (
    <div className="flex flex-col gap-[2rem]">
          <Header />
          <Divider sx={{
              width: '200%',
              color:'rgba(0, 0, 0, 0.15)'
          }}/>
          <HeroSection />
          <Footer/>
    </div>
  );
};
