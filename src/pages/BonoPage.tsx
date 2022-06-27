import React, { EventHandler, FormEvent, useContext, useEffect } from "react";
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
  ButtonBase,
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
import { useNavigate, useParams } from "react-router-dom";
import  bonohelp from "../images/help-bono.jpg";
import SimpleDialog from "../components/Dialog";

const initialbono: Bono = {
  valnominal: 0,
  valcomercial: 0,
  moneda: '',
  anios: 0,
  frecpago: 1,
  tipotasa: '',
  tasainteres: 0,
  tasadescuento: 0,
  imprenta: 0,
  fecemision: new Date(),
  percprima: 0,
  percestructuracion: 0,
  perccolocacion: 0,
  percflotacion: 0,
  perccavali: 0,
  capitalizacion: 1
};

function BonoPage() {
  const { state } = useContext(UserContext);
  const [bono, setBono] = React.useState<Bono>(initialbono);
  const navigate = useNavigate();
  const { id } = useParams();
  const [ openHelp, setOpenHelp ] = React.useState(false);

  useEffect(() => {
    if (id) {
      apiBonos.get(id)
        .then((response: any) => {
          console.log(response.data);
          setBono(response.data);
        }).catch((error: Error) => {
          window.alert("Error de sistema");
          console.log(error);
        })
    }
  }, [])

  const handleInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = target;
    setBono({ ...bono, [name]: value});
  };

  const handleSelectInput = (event: SelectChangeEvent) => {
    const { value, name } = event.target;
    setBono({ ...bono, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    bono.valnominal = Number(bono.valnominal);
    bono.valcomercial = Number(bono.valcomercial);
    bono.anios = Number(bono.anios);
    bono.frecpago = Number(bono.frecpago);
    bono.tasainteres = Number(bono.tasainteres);
    bono.tasadescuento = Number(bono.tasadescuento);
    bono.imprenta = Number(bono.imprenta);
    bono.percprima = Number(bono.percprima);
    bono.percestructuracion = Number(bono.percestructuracion);
    bono.percflotacion = Number(bono.percflotacion);
    bono.perccavali = Number(bono.perccavali);
    bono.perccolocacion = Number(bono.perccolocacion);
    bono.capitalizacion = Number(bono.capitalizacion);

    if(bono.valnominal < 0.0 || bono.valcomercial < 0.0 || bono.anios < 0.0 || bono.frecpago < 0.0 ||
      bono.tasainteres < 0.0 || bono.tasadescuento < 0.0 || bono.imprenta < 0.0 || bono.percprima < 0.0 || bono.percestructuracion < 0.0 || bono.percflotacion < 0.0 || bono.perccavali < 0.0 || bono.perccolocacion < 0.0 || bono.capitalizacion < 0.0) {
        window.alert("Error de sistema");
        return;
    }

    console.log(bono);
    if(id) {
      state.idusuario && apiBonos.put(state.idusuario, id, bono)
      .then((response: any) => {
        navigate(`/easy-finanzas/flujocaja/${response.data.idbono}`)
      })
      .catch((error: Error) => {
        window.alert("Error de sistema")
        console.log(error)
      })
    }
    else {

      state.idusuario && apiBonos.post(state.idusuario, bono)
        .then((response: any) => {
          navigate(`/easy-finanzas/flujocaja/${response.data.idbono}`)
        })
        .catch((error: Error) => {
          window.alert("Error de sistema")
          console.log(error)
        })
    }

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
              
              // type="number"
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Fecha de emisión"
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
            <FormControl fullWidth sx={{ mt: 2}}>
              <InputLabel>Moneda</InputLabel>
              <Select
                label="Tipo de moneda"
                name="moneda"
                onChange={handleSelectInput}
              >
                <MenuItem value={"dolares"}>$ Dólares</MenuItem>
                <MenuItem value={"soles"}>S/ Soles</MenuItem>
                <MenuItem value={"euros"}>£ Euros</MenuItem>
              </Select>
            </FormControl>
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
            <FormControl fullWidth sx={{ mt: 2}}>
              <InputLabel>Capitalización</InputLabel>
              <Select
                label="Capitalizacion"
                name="capitalizacion"
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
              label="Impuesto a la renta"
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
            <TextField
              label="colocación"
              variant="outlined"
              name="perccolocacion"
              value={bono.perccolocacion}
              onChange={handleInput}
              fullWidth
              sx={{ mt: 2}}
            />
            <TextField
              label="flotación"
              variant="outlined"
              name="percflotacion"
              value={bono.percflotacion}
              onChange={handleInput}
              fullWidth
              sx={{ mt: 2}}
            />
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "space-evenly",  }}>
          
          {id ? 
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
            Actualizar
          </Button>
          :

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
          
          }
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
      <Grid container justifyContent="flex-end">
        <Grid item>
          <ButtonBase onClick={() => setOpenHelp(true)}>
            <Typography color="blue">¿Necesita ayuda?</Typography>
          </ButtonBase>
        </Grid>
      </Grid>
      <SimpleDialog
        open={openHelp}
        onClose={() => setOpenHelp(false)}
        imageurl={bonohelp}
        title={"Ayuda main page"}
      />
    </Box>
  );
}

export default BonoPage;
