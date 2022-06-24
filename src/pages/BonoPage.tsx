import React, { EventHandler, FormEvent, useContext } from "react";
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
import { UserContext } from "../context/usercontext";
import { useNavigate } from "react-router-dom";

const initialbono: Bono = {
  valnominal: 0,
  valcomercial: 0,
  moneda: '',
  anios: 0,
  frecpago: '',
  tipotasa: '',
  tasainteres: 0,
  tasadescuento: 0,
  imprenta: 0,
  fecemision: new Date(),
  percprima: 0,
  percestructuracion: 0,
  perccolocacion: 0,
  percflotacion: 0,
  perccavali: 0
};

function BonoPage() {
  const { state } = useContext(UserContext);
  const [bono, setBono] = React.useState<Bono>(initialbono);
  const navigate = useNavigate();

  const handleInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = target;
    setBono({ ...bono, [name]: value });
  };

  const handleSelectInput = (event: SelectChangeEvent) => {
    const { value, name } = event.target;
    setBono({ ...bono, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(bono);
    state.idusuario && apiBonos.post(state.idusuario, bono)
      .then((response: any) => {
        navigate(`/easy-finanzas/flujocaja/${response.data.idbono}`)
      })
      .catch((error: Error) => {
        window.alert("Error de sistema")
        console.log(error)
      })
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
          <UserName userName={state.usuario ? state.usuario : 'No usuario'} />
        </Grid>
      </Grid>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container p={3} columnSpacing={3}>
          <Grid container item xs={12} sm={4} justifyContent="flex-start" direction="column">
            <TextField
              label="Valor Nominal"
              variant="outlined"
              name="valnominal"
              value={bono.valnominal}
              onChange={handleInput}
              fullWidth
              sx={{ mt: 2}}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Basic example"
                value={bono.fecemision}
                onChange={(newDate) => {
                  newDate && setBono({ ...bono, fecemision: newDate });
                }}
                renderInput={(params) => (
                  <TextField {...params} fullWidth sx={{ mt: 2}} />
                )}
              />
            </LocalizationProvider>
            <FormControl fullWidth sx={{ mt: 2}}>
              <InputLabel>Tipo de tasa</InputLabel>
              <Select
                value={bono.tipotasa}
                label="Tipo de tasa"
                name="tipotasa"
                onChange={handleSelectInput}
              >
                <MenuItem value={"Nominal"}>Nominal</MenuItem>
                <MenuItem value={"efectiva"}>Efectiva</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Tasa Anual de Descuento"
              variant="outlined"
              name="tasadescuento"
              value={bono.tasadescuento}
              onChange={handleInput}
              sx={{ mt: 2}}
              fullWidth
            />
          </Grid>
          <Grid container item xs={12} sm={4} justifyContent="flex-start" direction="column">
            <TextField
              label="Valor Comercial"
              variant="outlined"
              name="valcomercial"
              value={bono.valcomercial}
              onChange={handleInput}
              fullWidth
              sx={{ mt: 2}}
            />
            <TextField
              label="Número de años"
              variant="outlined"
              name="anios"
              value={bono.anios}
              onChange={handleInput}
              sx={{ mt: 2}}
              fullWidth
            />
            <FormControl fullWidth sx={{ mt: 2}}>
              <InputLabel>Frecuencia de pagos</InputLabel>
              <Select
                value={bono.frecpago}
                label="Frecuencia de pagos"
                name="frecpago"
                onChange={handleSelectInput}
              >
                <MenuItem value={1}>Diario</MenuItem>
                <MenuItem value={15}>Quincenal</MenuItem>
                <MenuItem value={30}>Mensual</MenuItem>
                <MenuItem value={60}>Bimestral</MenuItem>
                <MenuItem value={90}>Trimestral</MenuItem>
                <MenuItem value={120}>Cuatrimestral</MenuItem>
                <MenuItem value={180}>Semestral</MenuItem>
                <MenuItem value={360}>Anual</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Tasa de interés"
              variant="outlined"
              name="tasainteres"
              value={bono.tasainteres}
              onChange={handleInput}
              sx={{ mt: 2}}
              fullWidth
            />
            <TextField
              label="Impuesto"
              variant="outlined"
              name="imprenta"
              value={bono.imprenta}
              onChange={handleInput}
              sx={{ mt: 2}}
              fullWidth
            />
          </Grid>
          <Grid container item xs={12} sm={4} justifyContent="flex-start" direction="column">
            <TextField
              label="prima"
              variant="outlined"
              name="percprima"
              value={bono.percprima}
              onChange={handleInput}
              fullWidth
              sx={{ mt: 2}}
            />
            <TextField
              label="estructuracion"
              variant="outlined"
              name="percestructuracion"
              value={bono.percestructuracion}
              onChange={handleInput}
              fullWidth
              sx={{ mt: 2}}
            />
            <TextField
              label="cavali"
              variant="outlined"
              name="perccavali"
              value={bono.perccavali}
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
            onClick={() => setBono(initialbono)}
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
