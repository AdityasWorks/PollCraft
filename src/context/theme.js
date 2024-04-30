import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0f4c81",
    },

    secondary: {
      main: "#f4c223",
    },
  },
});
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0092de",
    },

    secondary: {
      main: "#faf69c",
    },
  },
});
