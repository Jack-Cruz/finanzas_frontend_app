import { Box, ButtonBase, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import UserName from '../components/UserName'
import pen from '../images/pen-icon.webp'
import wallet from '../images/waller.png'
import statistic from '../images/icon-statistics-1.jpg'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/usercontext'
import SimpleDialog from '../components/Dialog'
import mainpagehelp from '../images/help-mainpage.jpg';

export default function MainPage() {

  const { state } = useContext(UserContext);
  const [ openHelp, setOpenHelp ] = React.useState(false);

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
                Crear un bono
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
        imageurl={mainpagehelp}
        title={"Ayuda main page"}
      />
    </Box>
  )
}
