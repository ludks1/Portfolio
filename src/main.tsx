import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import theme from "./styles/theme.ts";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, GlobalStyles } from "@mui/material";

// Obtén el contenedor raíz
const container = document.getElementById("root");
const root = createRoot(container!);

// Renderiza la aplicación
root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            backgroundImage:
              "linear-gradient(135deg, #121212, #1A1A2E, #2C003E)",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            minHeight: "100vh",
            width: "100%",
          },
        }}
      />
      <App />
    </ThemeProvider>
  </StrictMode>
);
