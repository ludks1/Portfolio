import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import * as motion from "motion/react-client";
import theme from "../../styles/theme";
import { useTranslation } from 'react-i18next';

interface HeroSectionProps {
  onScrollToProjects: () => void;
  onScrollToContact: () => void;
}

export default function HeroSection({ onScrollToProjects, onScrollToContact }: HeroSectionProps) {
  const { t } = useTranslation();
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
          maxWidth: isMobile ? "100%" : isTablet ? "70%" : "55%",
        }}
      >
        <Typography
          variant={isMobile ? "h4" : isTablet ? "h3" : "h2"}
          gutterBottom
          sx={{ fontWeight: 600 }}
        >
          {t('hero.title')}
        </Typography>
        <Typography 
          variant={isMobile ? "body1" : "h6"}
          sx={{ 
            mb: 3,
            color: theme.palette.text.primary,
            lineHeight: 1.6
          }}
        >
          {t('hero.subtitle')}
        </Typography>
        <Typography 
          variant="body1"
          sx={{ 
            mb: 4,
            color: theme.palette.text.primary,
            opacity: 0.9
          }}
        >
          {t('hero.description')}
        </Typography>
        
        {/* CTA Buttons */}
        <Stack 
          direction={isMobile ? "column" : "row"} 
          spacing={2}
          sx={{ alignItems: isMobile ? "center" : "flex-start" }}
        >
          <Button
            variant="contained"
            size="large"
            onClick={onScrollToProjects}
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: "#fff",
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontWeight: 600,
              textTransform: "none",
              "&:hover": {
                backgroundColor: theme.palette.primary.dark || "#cc0066",
                transform: "translateY(-2px)",
                boxShadow: "0 4px 12px rgba(255, 0, 127, 0.4)",
              },
              transition: "all 0.3s ease",
            }}
          >
            {t('hero.viewProjects')}
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={onScrollToContact}
            sx={{
              borderColor: theme.palette.secondary.main,
              color: theme.palette.secondary.main,
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontWeight: 600,
              textTransform: "none",
              "&:hover": {
                borderColor: theme.palette.primary.main,
                backgroundColor: "rgba(255, 0, 127, 0.1)",
                transform: "translateY(-2px)",
              },
              transition: "all 0.3s ease",
            }}
          >
            {t('hero.contactMe')}
          </Button>
        </Stack>
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
            src="/hero.png"
            alt={t('hero.altText')}
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
