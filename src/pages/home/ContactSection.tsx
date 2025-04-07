import { Box, Typography, useMediaQuery } from "@mui/material";
import theme from "../../styles/theme";

export default function ContactSection() {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        sx={{
          alignItems: isMobile ? "center" : "flex-start",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            display: "flex",
            justifyContent: isMobile ? "center" : "right",
            marginTop: 0,
          }}
        >
          Contact
        </Typography>
        <Typography variant="body1">
          I'm Ludwind, a Software Engineer passionate about building innovative
          tech solutions. I focus on developing high-quality products that solve
          real problems and deliver value. Always learning, always creating.
        </Typography>
      </Box>
    </>
  );
}
