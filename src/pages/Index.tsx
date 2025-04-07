import { Container } from "@mui/material";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import HeroSection from "./home/HeroSection";
import AboutSection from "./home/AboutSection";
import Skills from "./home/Skills";

export default function Index() {
  return (
    <Container>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Skills />
      <Footer />
    </Container>
  );
}
