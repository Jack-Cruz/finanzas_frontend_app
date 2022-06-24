import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import UserName from '../components/UserName'
import pen from '../images/pen-icon.webp'
import wallet from '../images/waller.png'
import statistic from '../images/icon-statistics-1.jpg'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/usercontext'

export default function MainPage() {

  const { state } = useContext(UserContext);

  return (
    <Box sx={{ display: "flex", flexDirection: "column"}}>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <UserName userName={state.usuario ? state.usuario : 'No usuario'} />
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", height: '80vh'}}>
        <Card sx={{ maxWidth: 200}}>
          <CardActionArea component={Link} to="/easy-finanzas/crearbono">
            <CardMedia 
              component="img"
              height="100"
              width="100"
              image={pen}
              alt="pen"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Interfaz Intuitivo
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 200}}>
          <CardActionArea component={Link} to="/easy-finanzas/listabonos">
            <CardMedia 
              component="img"
              height="100"
              width="100"
              image={wallet}
              alt="wallet"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Historial de operaciones
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 200}}>
          <CardActionArea component={Link} to="/easy-finanzas/flujocaja/1">
            <CardMedia 
              component="img"
              height="100"
              width="100"
              image={statistic}
              alt="statistic"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Resultados rápidos
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Typography color="blue">¿Necesita ayuda?</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}
