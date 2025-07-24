import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { LinkedIn, GitHub, Email, Download } from "@mui/icons-material";
import theme from "../../styles/theme";
import { useTranslation } from 'react-i18next';

export default function ContactSection() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Ludwind_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      sx={{
        textAlign: isMobile ? "center" : "left",
        px: isMobile ? 2 : 10,
        py: 6,
      }}
    >
      <Typography variant="h4" gutterBottom>
        {t('contact.title')}
      </Typography>

      <Typography variant="h5" sx={{ mb: 3 }}>
        {t('contact.description')}
      </Typography>

      <Stack
        direction={isMobile ? "column" : "row"}
        spacing={2}
        alignItems={isMobile ? "center" : "flex-start"}
      >
        <Button
          variant="contained"
          startIcon={<Download />}
          onClick={handleDownloadCV}
        >
          {t('contact.downloadCV')}
        </Button>

        <Stack direction="row" spacing={1}>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/ingrotsteinsw/?locale=en_US"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
          >
            <LinkedIn />
          </IconButton>

          <IconButton
            component="a"
            href="https://github.com/ludks1"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <GitHub />
          </IconButton>

          <IconButton
            component="a"
            href="mailto:ingrotstein@gmail.com"
            color="error"
          >
            <Email />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}
