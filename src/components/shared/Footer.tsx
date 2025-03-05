import { Box } from "@mui/material";
import theme from "../../styles/theme";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        py: 2,
        background: theme.palette.background.gradient,
      }}
    >
      <footer>
        <p>Footer</p>
      </footer>
    </Box>
  );
}
