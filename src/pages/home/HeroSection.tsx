import { Box, Typography, useMediaQuery } from "@mui/material";
import * as motion from "motion/react-client";
import theme from "../../styles/theme";

export default function HeroSection() {
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: isMobile ? "center" : "flex-start",
        textAlign: isMobile ? "center" : "left",
        gap: isMobile ? 4 : 0,
        padding: isMobile ? 2 : 4,
      }}
    >
      {/* Text Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignSelf: "flex-end",
          maxWidth: isMobile ? "100%" : isTablet ? "70%" : "50%",
        }}
      >
        <Typography
          variant={isMobile ? "h3" : isTablet ? "h2" : "h1"}
          gutterBottom
        >
          Software Engineer Student
        </Typography>
        <Typography variant={isMobile ? "body1" : "h6"}>
          I'm Ludwind, a Software Engineer passionate about building innovative
          tech solutions. I focus on developing high-quality products that solve
          real problems and deliver value. Always learning, always creating.
        </Typography>
      </Box>
      {/* Image Section */}
      {!isMobile && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <motion.img
            src="../../../hero.png"
            alt="Ludwind Rotstein"
            className="rounded-xl shadow-lg"
            initial={{ opacity: 0, y: -150 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              width: isTablet ? 250 : 300,
              height: isTablet ? 350 : 400,
            }}
          />
        </Box>
      )}
    </Box>
  );
}
