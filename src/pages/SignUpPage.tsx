import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import authService from "../api/auth";
import { Bonista } from '../interfaces/Bonista';

const initBonista: Bonista = {
  nombre: '',
  apellido: '',
  DNI: '',
  correo: '',
  celular: '',
  usuario: '',
  contrasenia: '',
  RUC: '',
  direccion: '',
  region: '',
  provincia: '',
  distrito: ''
}

export default function SignUpPage() {
  const navigate = useNavigate();
  const [ bonista, setBonista ] = useState<Bonista>(initBonista);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(bonista);
    authService.register(bonista)
      .then(() => {
        navigate(`/signin`);

      })
      .catch((e: Error) => {
        window.alert("Error de sistema")
        console.log(e)
      })
  }

  const handleInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = target;
    setBonista({ ...bonista, [name]: value });
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "secondary.main",
        height: "100vh",
      }}
    >
      <Typography sx={{ p: 3, color: "white" }} variant="h4">
        Easy-Finanzas
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "white",
          border: "2px solid #000",
          borderRadius: "10px",
          px: 3,
          py: 2
        }}
      >
        <Typography variant="h4" component="h2" sx={{ color: "primary.main" }}>
          Registro
        </Typography>
        <Grid container p={5} columnSpacing={12}> 
          <Grid
            container
            item
            xs={12}
            sm={6}
            justifyContent="flex-start"
            direction="column"
          >
            <TextField
              label="Nombre"
              variant="outlined"
              name="nombre"
              value={bonista.nombre}
              onChange={handleInput}
              fullWidth
              sx={{ mt: 2 }}
            />
            <TextField
              label="Apellido"
              variant="outlined"
              name="apellido"
              value={bonista.apellido}
              onChange={handleInput}
              sx={{ mt: 2 }}
              fullWidth
            />
            <TextField
              label="DNI"
              variant="outlined"
              name="DNI"
              value={bonista.DNI}
              onChange={handleInput}
              sx={{ mt: 2 }}
              fullWidth
            />
            <TextField
              label="Correo Electrónico"
              variant="outlined"
              name="correo"
              value={bonista.correo}
              onChange={handleInput}
              sx={{ mt: 2 }}
              fullWidth
            />
            <TextField
              label="Celular"
              variant="outlined"
              name="celular"
              value={bonista.celular}
              onChange={handleInput}
              sx={{ mt: 2 }}
              fullWidth
            />
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={6}
            justifyContent="flex-start"
            direction="column"
          >
            <TextField
              label="Usuario"
              variant="outlined"
              name="usuario"
              value={bonista.usuario}
              onChange={handleInput}
              fullWidth
              sx={{ mt: 2 }}
            />
            <TextField
              label="Contraseña"
              variant="outlined"
              name="contrasenia"
              type="password"
              value={bonista.contrasenia}
              onChange={handleInput}
              sx={{ mt: 2 }}
              fullWidth
            />
            <TextField
              label="RUC"
              variant="outlined"
              name="RUC"
              value={bonista.RUC}
              onChange={handleInput}
              sx={{ mt: 2 }}
              fullWidth
            />
            <TextField
              label="Dirección"
              variant="outlined"
              name="direccion"
              value={bonista.direccion}
              onChange={handleInput}
              sx={{ mt: 2 }}
              fullWidth
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="outlined" sx={{ bgcolor: "secondary.main"}}>
          Crear cuenta
        </Button>
      </Box>
    </Container>
  );
}
