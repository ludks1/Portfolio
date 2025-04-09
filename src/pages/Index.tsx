import { Container } from "@mui/material";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import HeroSection from "./home/HeroSection";
import AboutSection from "./home/AboutSection";
import Skills from "./home/Skills";
import ContactSection from "./home/ContactSection";
import Projects from "./home/ProjectsSection";
import { FadeInWhenVisible } from "../components/Animation";
import { motion, useScroll } from "framer-motion";
import theme from "../styles/theme";
import { useRef } from "react";
import Section from "../components/shared/Section";

export default function Index() {
  const { scrollYProgress } = useScroll();
  const sectionRef = {
    HOME: useRef<HTMLElement>(null),
    ABOUT: useRef<HTMLElement>(null),
    SKILLS: useRef<HTMLElement>(null),
    PORTFOLIO: useRef<HTMLElement>(null),
    CV: useRef<HTMLElement>(null),
  };
  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: theme.palette.primary.main,
        }}
      />
      <Container>
        <>
          <Navbar sectionRefs={sectionRef} />
        </>
        <Section ref={sectionRef.HOME}>
          <FadeInWhenVisible>
            <HeroSection />
          </FadeInWhenVisible>
        </Section>
        <Section ref={sectionRef.ABOUT}>
          <FadeInWhenVisible>
            <AboutSection />
          </FadeInWhenVisible>
        </Section>
        <Section ref={sectionRef.SKILLS}>
          <FadeInWhenVisible>
            <Skills />
          </FadeInWhenVisible>
        </Section>
        <Section ref={sectionRef.PORTFOLIO}>
          <FadeInWhenVisible>
            <Projects />
          </FadeInWhenVisible>
        </Section>
        <Section ref={sectionRef.CV}>
          <FadeInWhenVisible>
            <ContactSection />
          </FadeInWhenVisible>
        </Section>
        <Footer />
      </Container>
    </>
  );
}
