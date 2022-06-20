import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/signin`);
  }

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
              // onChange={handleInput}
              fullWidth
              sx={{ mt: 2 }}
            />
            <TextField
              label="Apellido"
              variant="outlined"
              // onChange={handleInput}
              sx={{ mt: 2 }}
              fullWidth
            />
            <TextField
              label="DNI"
              variant="outlined"
              // onChange={handleInput}
              sx={{ mt: 2 }}
              fullWidth
            />
            <TextField
              label="Correo Electrónico"
              variant="outlined"
              // onChange={handleInput}
              sx={{ mt: 2 }}
              fullWidth
            />
            <TextField
              label="Celular"
              variant="outlined"
              // onChange={handleInput}
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
              // onChange={handleInput}
              fullWidth
              sx={{ mt: 2 }}
            />
            <TextField
              label="Contraseña"
              variant="outlined"
              // onChange={handleInput}
              sx={{ mt: 2 }}
              fullWidth
            />
            <TextField
              label="RUC"
              variant="outlined"
              // onChange={handleInput}
              sx={{ mt: 2 }}
              fullWidth
            />
            <TextField
              label="Dirección"
              variant="outlined"
              // onChange={handleInput}
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
