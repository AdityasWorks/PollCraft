import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "./context/theme";

const App = ({ children, mode }) => {
  const Theme = mode === "dark" ? darkTheme : lightTheme;
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>{children} </ThemeProvider>
    </div>
  );
};

export default App;
