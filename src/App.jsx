import React from "react";
import AppHeader from "./components/common/AppHeader";
import AppRoutes from "./routes";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <div className="main">
          <AppHeader />
          <AppRoutes />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
