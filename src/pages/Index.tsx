import { Container } from "@mui/material";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import HeroSection from "./home/HeroSection";

export default function Index() {
  return (
    <Container>
      <Navbar />
      <HeroSection />
      <Footer />
    </Container>
  );
}
