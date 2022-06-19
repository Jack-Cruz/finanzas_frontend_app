import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import MainPage from "./pages/MainPage";
import BonoPage from "./pages/BonoPage";
import { User1 } from "./data/Data";
import { initialUserState } from "./context/userstate";
import { userReducer } from "./context/userreducer";
import { UserContext } from "./context/usercontext";
import { BrowserRouter, Outlet } from "react-router-dom";
import MainRouter from "./routes/MainRouter";
import Dashboard from "./components/Dashboard";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import ListaBonos from "./pages/ListaBonos";
import FlujodeCaja from "./pages/FlujodeCaja";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

const mdTheme = createTheme({
  palette: {
    primary: {
      main: "#555",
      contrastText: "#000",
    },
    secondary: {
      main: "#4DD7FA",
      contrastText: "#000",
    },
    info: {
      main: "#C9F1FD",
      contrastText: "#000",
    },
  },
});

function App() {
  const [state, dispatch] = useReducer(userReducer, initialUserState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={mdTheme}>
        <CssBaseline />
        <Outlet />
        {/* <Dashboard>
            <MainPage userName={user.name}/>
          </Dashboard> */}
      </ThemeProvider>

      {/* <BonoPage userName={user.name} /> */}
      {/* <MainRouter />
        <SecondaryRouter /> */}
    </UserContext.Provider>
  );
}

export default App;
