import React, { useContext, useEffect } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";
import finanzas from "../images/easy_finanzas.jpg";
import { Credentials } from "../interfaces/Bonista";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../context/usercontext";
import authService from "../api/auth";
import { setIdUsuario, setUsuario } from "../context/userreducer";

const initCredentials: Credentials = {
  usuario: "",
  contrasenia: "",
};

export default function SignInPage() {
  const [credentials, setCredentials] = React.useState(initCredentials);
  const { state, dispatch } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    authService.login(credentials)
      .then((response: any) => {
        dispatch(setIdUsuario(response.data.idbonista))
        dispatch(setUsuario(response.data.usuario))
        navigate(`/easy-finanzas`);              
      })
      .catch((error: Error) => {
        console.error(error);
        window.alert("Error del sistema");
      })
    
  };

  const handleInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = target;
    setCredentials({ ...credentials, [name]: value });
  };

  const navigateTo = (url: string) => {
    navigate(url);
  }


  return (
    <Container sx={{ backgroundColor: "#DAE6E9", height: "100vh" }}>
      <Container
        maxWidth="xs"
        sx={{ display: "flex", flexDirection: "column", pt: 5 }}
      >
        <Paper
          sx={{
            position: "relative",
            backgroundColor: "grey.800",
            color: "#fff",
            mb: 4,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url(${finanzas})`,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              backgroundColor: "rgba(0,0,0,.3)",
            }}
          />

          <Grid container alignItems="center" sx={{ flexDirection: "column" }}>
            <Grid item xs={12}>
              <Typography
                component="h2"
                variant="h4"
                color="primary"
                sx={{
                  backgroundColor: "#B0C4ED",
                  alignContent: "center",
                  p: 1,
                  mt: 2,
                }}
              >
                Easy-Finanzas
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <TextField
                  label="Usuario"
                  variant="outlined"
                  name="usuario"
                  value={credentials.usuario}
                  onChange={handleInput}
                  fullWidth
                  sx={{ mt: 2, backgroundColor: "#fff" }}
                />
                <TextField
                  label="Password"
                  variant="outlined"
                  name="contrasenia"
                  type="password"
                  value={credentials.contrasenia}
                  onChange={handleInput}
                  fullWidth
                  sx={{ mt: 2, backgroundColor: "#fff" }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3, backgroundColor: "#DAE6E9" }}
                >
                  Iniciar sesión
                </Button>
              </Box>
            </Grid>
            <Grid item container justifyContent="space-evenly" sx={{ m: 2}}>
              <Grid item>
                <Button
                  component={Link}
                  to='/signup'
                  sx={{ color: "blue", backgroundColor: "#DAE6E9"}}
                >
                  ¿Eres miembro nuevo?
                </Button>
              </Grid>
              <Grid item sx={{ color: "blue", backgroundColor: "#DAE6E9"}}>
                <Button
                  component={Link}
                  to='/signup'
                  sx={{ color: "blue", backgroundColor: "#DAE6E9"}}
                >
                  ¿Olvidé la contraseña?
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <Typography variant="body1" component="h2" color="primary">
          Easy-Finanzas con la finalidad de ayudar a tus finanzas.
        </Typography>
      </Container>
    </Container>
  );
}
