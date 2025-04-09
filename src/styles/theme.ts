import { createTheme } from "@mui/material";

/*
Extend the Theme interface to add the gradient property
to the TypeBackground interface
*/
declare module "@mui/material/styles" {
  interface TypeBackground {
    gradient: string;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF007F",
      contrastText: "#ffffff",
    },

    secondary: {
      main: "#E100FF",
      contrastText: "#ffffff",
    },

    background: {
      default: "#121212",
      paper: "rgba(255, 255, 255, 0.17)",
      /*
      gradient does not exist in the default theme with the type 'TypeBackground'
      so we have to add it manually in the module declaration above
      */
      gradient: "linear-gradient(135deg, #121212, #1A1A2E, #2C003E)",
    },

    text: {
      primary: "#E6E6E6",
      secondary: "#FF007F",
    },
  },
  typography: {
    fontFamily: "cursive",
    h1: {
      fontSize: "3rem",
      fontWeight: 500,
    },
  },
});

export default theme;
