import { Box, ButtonBase, Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import apiFlujo from '../api/api.flujo';
import UserName from '../components/UserName';
import { UserContext } from '../context/usercontext';
import { FlujoCaja } from '../interfaces/Bono'
import flujohelp from '../images/help-flujo.jpg';
import SimpleDialog from '../components/Dialog';

export default function FlujodeCaja() {
  const { state } = useContext(UserContext);
  const [ flujos, setFlujos] = useState<FlujoCaja[]>([])
  const { id } = useParams();
  const [ openHelp, setOpenHelp ] = React.useState(false);

  useEffect(() => {
    id && apiFlujo.get(id)
      .then((response: any) => {
        console.log(response.data);
        setFlujos(response.data);
      })
      .catch((error: Error) => {
        window.alert('Error de sistema')
        console.log(error)
      })
  }, [])

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Grid container>
        <Grid item xs>
          <Typography component="h1" variant="h3" color="inherit" fontWeight="bold" gutterBottom>
            Flujo de caja
          </Typography>
        </Grid>
        <Grid item>
          <UserName userName={state.usuario ? state.usuario : 'No usuario'} />
        </Grid>
      </Grid>
      <Table size="small" sx={{ mt: 4}}>
        <TableHead>
          <TableRow>
            <TableCell>Nº</TableCell>
            <TableCell>Bono</TableCell>
            <TableCell>Interes</TableCell>
            <TableCell>Cuota</TableCell>
            <TableCell>Amortizacion</TableCell>
            <TableCell>Prima</TableCell>
            <TableCell>Escudo</TableCell>
            <TableCell>Flujo bonista</TableCell>
            <TableCell>Flujo actual</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {flujos.map((flujo, index) => (
            <TableRow key={flujo.idflujo}>
              <TableCell>{flujo.n}</TableCell>
              <TableCell>{flujo.bono.toFixed(2)}</TableCell>
              <TableCell>{flujo.interes.toFixed(2)}</TableCell>
              <TableCell>{flujo.cuota.toFixed(2)}</TableCell>
              <TableCell>{flujo.amortizacion.toFixed(2)}</TableCell>
              <TableCell>{flujo.prima.toFixed(2)}</TableCell>
              <TableCell>{flujo.escudo.toFixed(2)}</TableCell>
              <TableCell>{flujo.flujobonista.toFixed(2)}</TableCell>
              <TableCell>{flujo.flujoactual.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Grid container justifyContent="flex-end" sx={{ mt: 5}}>
        <Grid item>
          <ButtonBase onClick={() => setOpenHelp(true)}>
            <Typography color="blue">¿Necesita ayuda?</Typography>
          </ButtonBase>
        </Grid>
      </Grid>
      <SimpleDialog
        open={openHelp}
        onClose={() => setOpenHelp(false)}
        imageurl={flujohelp}
        title={"Ayuda main page"}
      />
    </Box>
  )
}
