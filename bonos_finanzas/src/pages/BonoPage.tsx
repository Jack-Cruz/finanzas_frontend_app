import React, { EventHandler, FormEvent } from 'react'
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar"
import MuiDrawer from '@mui/material/Drawer'
import { createTheme, styled, ThemeProvider } from '@mui/material/styles'
import { Box, Button, Container, CssBaseline, Divider, IconButton, List, ListItemButton, ListItemIcon, ListItemText, TextField, Toolbar, Typography, Grid, Paper } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import CreateIcon from '@mui/icons-material/Create'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import LogoutIcon from '@mui/icons-material/Logout';
import { Bono } from '../interfaces/Bono'
import apiBonos from "..//api/api.bonos";

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open'})(
  ({theme, open}) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
)

const mdTheme = createTheme()
const initialbono: Bono = {
  id: 0,
  valor_nominal:  0,
  valor_comercial: 0,
  fecha_emision: new Date(),
  frecuencia_pago: 0,
  numero_anios: 0,
  tipo_tasa: 'efectiva',
  tasa_de_interes: 0,
  tasa_anual_descuento: 0,
  impuesto: 0,
  prima: 0,
  estructuracion: 0,
  colocacion: 0,
  flotacion: 0,
  cavali: 0
}

interface Props {
  userName: string
}

function BonoPage({ userName }: Props) {
  const [open, setOpen] = React.useState(true);
  const [bono, setBono] = React.useState<Bono>(initialbono)
  
  const toggleDrawer = () => {
    setOpen(!open)
  }

  const handleInput = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = target
    setBono({...bono, [name]: value})
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(bono)
    // apiBonos.post(bono.id, bono)
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex'}}>
        <CssBaseline />
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography sx={{ pl: 3}}>
              Easy-Finanzas
            </Typography>
          </Toolbar>
          <Divider />
          <List component="nav">
            <ListItemButton>
              <ListItemIcon>
                <CreateIcon />
              </ListItemIcon>
              <ListItemText primary="Bono" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <CreditCardIcon />
              </ListItemIcon>
              <ListItemText primary="Operaciones" />
            </ListItemButton>
          </List>
          <Toolbar 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: [750]
            }}
          >
          </Toolbar>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              < LogoutIcon/>
            </IconButton>
            <Typography sx={{ pl: [3]}}>
              Cerrar Sesion
            </Typography>
            
          </Toolbar>
        </Drawer>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
            <Container maxWidth="lg" 
              sx={{ mt: 4, 
                mb: 4,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                border: '1px solid #000',
              }}
            >
                <Typography variant="h1" component="h1">
                  Bono
                </Typography>
                <Container>
                  {userName}
                </Container>
            </Container>
            <Container sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
            >
              <Container sx={{
                display: 'flex',
                flexDirection: 'column'
              }}
              >
                <TextField label="Valor Nominal" variant="outlined" name="valor_nominal" value={bono.valor_nominal} onChange={handleInput} />
                <TextField label="Fecha de emision" variant="outlined" name="fecha_emision" value={bono.        
                  fecha_emision} onChange={handleInput}/>
                <TextField label="Tipo de tasa" variant="outlined" name="tipo_tasa" value={bono.tipo_tasa} onChange={handleInput} />
                <TextField label="Tasa Anual de Descuento" variant="outlined" name="tasa_anual_descuento" value={bono.tasa_anual_descuento} onChange={handleInput} />
              </Container>
              <Container sx={{
                flexDirection: 'column'
              }}>
                <TextField label="Valor Comercial" variant="outlined" name="valor_comercial" value={bono.
                valor_comercial} onChange={handleInput}/>
                <TextField label="Número de años" variant="outlined" name="numero_anios" value={bono.numero_anios} onChange={handleInput}/>
                <TextField label="Frecuencia de pagos" variant="outlined" name="frecuencia_pago" value={bono.frecuencia_pago} onChange={handleInput} />
                <TextField label="Tasa de interés" variant="outlined" name="tasa_de_interes" value={bono.tasa_de_interes} onChange={handleInput} />
                <TextField label="Impuesto" variant="outlined" name="impuesto" value={bono.impuesto} onChange={handleInput} />
              </Container>
            
              <Container sx={{
                flexDirection: 'column'
              }}>
                <TextField label="prima" variant='outlined' name="prima" value={bono.prima} onChange=     {handleInput}/>
                <TextField label="estructuracion" variant='outlined' name="estructuracion" value={bono.estructuracion} onChange={handleInput}/>
                <TextField label="cavali" variant='outlined' name="cavali" value={bono.cavali} onChange={handleInput}/>
              </Container>
            </Container>            

            <Button type="submit" variant="contained">Save changes</Button>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default BonoPage