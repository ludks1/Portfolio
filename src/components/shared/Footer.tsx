import { Box, Typography } from "@mui/material";
import theme from "../../styles/theme";
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.gradient,
        color: theme.palette.text.secondary,
        borderRadius: 4,
        border: `1px solid ${theme.palette.secondary.main}`,
        width: "80%",
        mx: "auto",
        my: 2,
        py: 2,
        textAlign: "center",
      }}
    >
      <footer>
        <Typography variant="body2" color="inherit">
          &copy; {new Date().getFullYear()} Ludwind Rotstein. {t('footer.copyright')}
        </Typography>
      </footer>
    </Box>
  );
}
