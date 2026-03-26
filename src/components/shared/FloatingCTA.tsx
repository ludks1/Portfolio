import { Fab, useScrollTrigger, Zoom } from "@mui/material";
import { Email } from "@mui/icons-material";
import theme from "../../styles/theme";
import { useTranslation } from 'react-i18next';

interface FloatingCTAProps {
  onScrollToContact: () => void;
}

export default function FloatingCTA({ onScrollToContact }: FloatingCTAProps) {
  const { t } = useTranslation();
  
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 300,
  });

  return (
    <Zoom in={trigger}>
      <Fab
        variant="extended"
        onClick={onScrollToContact}
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          backgroundColor: theme.palette.primary.main,
          color: "#fff",
          fontWeight: 600,
          textTransform: "none",
          px: 3,
          zIndex: 1000,
          "&:hover": {
            backgroundColor: theme.palette.primary.dark || "#cc0066",
            transform: "scale(1.05)",
            boxShadow: "0 6px 20px rgba(255, 0, 127, 0.5)",
          },
          transition: "all 0.3s ease",
        }}
      >
        <Email sx={{ mr: 1 }} />
        {t('floatingCTA.text')}
      </Fab>
    </Zoom>
  );
}
