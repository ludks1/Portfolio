import { Box, Typography, useMediaQuery } from "@mui/material";
import theme from "../../styles/theme";
import { useTranslation } from 'react-i18next';

export default function AboutSection() {
  const { t } = useTranslation();
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
          {t('about.title')}
        </Typography>
        <Typography variant="body1">
          {t('about.description')}
        </Typography>
      </Box>
    </>
  );
}
