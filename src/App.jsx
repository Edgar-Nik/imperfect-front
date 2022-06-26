import React from "react";
import AppHeader from "./components/common/AppHeader";
import AppRoutes from "./routes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAlerts from "./components/common/AppAlerts";
import { Provider } from "react-redux";
import store from "./store/store";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <AppAlerts />
        <div className="App">
          <div className="main">
            <AppHeader />
            <AppRoutes />
          </div>
        </div>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
