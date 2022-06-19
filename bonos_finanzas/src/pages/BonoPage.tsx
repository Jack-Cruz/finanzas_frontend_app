import React, { EventHandler, FormEvent } from "react";
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Toolbar,
  Typography,
  Grid,
  Paper,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CreateIcon from "@mui/icons-material/Create";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LogoutIcon from "@mui/icons-material/Logout";
import { Bono } from "../interfaces/Bono";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import apiBonos from "..//api/api.bonos";
import UserName from "../components/UserName";

const initialbono: Bono = {
  id: 0,
  valor_nominal: 0,
  valor_comercial: 0,
  fecha_emision: new Date(),
  frecuencia_pago: 0,
  numero_anios: 0,
  tipo_tasa: "efectiva",
  tasa_de_interes: 0,
  tasa_anual_descuento: 0,
  impuesto: 0,
  prima: 0,
  estructuracion: 0,
  colocacion: 0,
  flotacion: 0,
  cavali: 0,
};

interface Props {
  userName: string;
}

function BonoPage({ userName }: Props) {
  const [bono, setBono] = React.useState<Bono>(initialbono);

  const handleInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = target;
    setBono({ ...bono, [name]: value });
  };

  const handleSelectInput = (event: SelectChangeEvent) => {
    setBono({ ...bono, tipo_tasa: event.target.value as string });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(bono);
    // apiBonos.post(bono.id, bono)
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Grid container>
        <Grid item xs>
          <Typography component="h1" variant="h3" color="inherit" fontWeight="bold" gutterBottom>
            Bono
          </Typography>
        </Grid>
        <Grid item>
          <UserName userName={userName} />
        </Grid>
      </Grid>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container p={3} columnSpacing={3}>
          <Grid container item xs={12} sm={4} justifyContent="flex-start" direction="column">
            <TextField
              label="Valor Nominal"
              variant="outlined"
              name="valor_nominal"
              value={bono.valor_nominal}
              onChange={handleInput}
              fullWidth
              sx={{ mt: 2}}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Basic example"
                value={bono.fecha_emision}
                onChange={(newDate) => {
                  newDate && setBono({ ...bono, fecha_emision: newDate });
                }}
                renderInput={(params) => (
                  <TextField {...params} fullWidth sx={{ mt: 2}} />
                )}
              />
            </LocalizationProvider>
            <FormControl fullWidth sx={{ mt: 2}}>
              <InputLabel>Tipo de tasa</InputLabel>
              <Select
                value={bono.tipo_tasa}
                label="Tipo de tasa"
                onChange={handleSelectInput}
              >
                <MenuItem value={"Nominal"}>Nominal</MenuItem>
                <MenuItem value={"efectiva"}>Efectiva</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Tasa Anual de Descuento"
              variant="outlined"
              name="tasa_anual_descuento"
              value={bono.tasa_anual_descuento}
              onChange={handleInput}
              sx={{ mt: 2}}
              fullWidth
            />
          </Grid>
          <Grid container item xs={12} sm={4} justifyContent="flex-start" direction="column">
            <TextField
              label="Valor Comercial"
              variant="outlined"
              name="valor_comercial"
              value={bono.valor_comercial}
              onChange={handleInput}
              fullWidth
              sx={{ mt: 2}}
            />
            <TextField
              label="Número de años"
              variant="outlined"
              name="numero_anios"
              value={bono.numero_anios}
              onChange={handleInput}
              sx={{ mt: 2}}
              fullWidth
            />
            <TextField
              label="Frecuencia de pagos"
              variant="outlined"
              name="frecuencia_pago"
              value={bono.frecuencia_pago}
              onChange={handleInput}
              sx={{ mt: 2}}
              fullWidth
            />
            <TextField
              label="Tasa de interés"
              variant="outlined"
              name="tasa_de_interes"
              value={bono.tasa_de_interes}
              onChange={handleInput}
              sx={{ mt: 2}}
              fullWidth
            />
            <TextField
              label="Impuesto"
              variant="outlined"
              name="impuesto"
              value={bono.impuesto}
              onChange={handleInput}
              sx={{ mt: 2}}
              fullWidth
            />
          </Grid>
          <Grid container item xs={12} sm={4} justifyContent="flex-start" direction="column">
            <TextField
              label="prima"
              variant="outlined"
              name="prima"
              value={bono.prima}
              onChange={handleInput}
              fullWidth
              sx={{ mt: 2}}
            />
            <TextField
              label="estructuracion"
              variant="outlined"
              name="estructuracion"
              value={bono.estructuracion}
              onChange={handleInput}
              fullWidth
              sx={{ mt: 2}}
            />
            <TextField
              label="cavali"
              variant="outlined"
              name="cavali"
              value={bono.cavali}
              onChange={handleInput}
              fullWidth
              sx={{ mt: 2}}
            />
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "space-evenly",  }}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              bgcolor: "#3D8AF7",
              color: "white",
              border: "1px solid",
              borderColor: "black",
              px: 5,
            }}
          >
            Calcular
          </Button>

          <Button
            variant="contained"
            color="info"
            sx={{
              border: "1px solid",
              borderColor: "black",
              px: 5,
            }}
          >
            Reiniciar
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default BonoPage;
