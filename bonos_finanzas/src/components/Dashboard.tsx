import React from "react";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import {
  Box,
  Container,
  CssBaseline,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";

import MenuIcon from "@mui/icons-material/Menu";
import CreateIcon from "@mui/icons-material/Create";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const drawerWidth: number = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));


export default function Dashboard(props: any) {
  const [open, setOpen] = React.useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              px: [1],
              bgcolor:"secondary.main" 
            }}
          >
            <IconButton onClick={toggleDrawer} >
              <MenuIcon />
            </IconButton>
            <Typography sx={{ pl: 3, color: "white"}} variant="h6">Easy-Finanzas</Typography>
          </Toolbar>
          <Divider />
          <List
            component="nav"
            sx={{
              flexGrow: 1,
              bgcolor:"secondary.main" 
            }}
          >
            <ListItemButton component={Link} to={`/easy-finanzas/crearbono`}>
              <ListItemIcon>
                <CreateIcon />
              </ListItemIcon>
              <ListItemText primary="Bono" primaryTypographyProps={{variant: "h6"}}/>
            </ListItemButton>
            <ListItemButton component={Link} to={`/easy-finanzas/listabonos`}>
              <ListItemIcon>
                <CreditCardIcon />
              </ListItemIcon>
              <ListItemText primary="Operaciones" primaryTypographyProps={{variant: "h6"}} />
            </ListItemButton>
          </List>
          <Toolbar
            sx={{
              px: [1],
              bgcolor:"secondary.main"
            }}
          >
            <IconButton onClick={toggleDrawer} size="large">
              <LogoutIcon />
            </IconButton>
            <Typography sx={{ pl: [3], color:"black" }} variant="h6">Cerrar Sesion</Typography>
          </Toolbar>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Outlet />
          </Container>
        </Box>
      </Box>
    </>
  );
}