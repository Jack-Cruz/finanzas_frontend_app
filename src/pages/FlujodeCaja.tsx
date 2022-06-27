import { Box, Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import apiFlujo from '../api/api.flujo';
import UserName from '../components/UserName';
import { UserContext } from '../context/usercontext';
import { FlujoCaja } from '../interfaces/Bono'


export default function FlujodeCaja() {
  const { state } = useContext(UserContext);
  const [ flujos, setFlujos] = useState<FlujoCaja[]>([])
  const { id } = useParams();

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
              <TableCell>{flujo.bono}</TableCell>
              <TableCell>{flujo.interes}</TableCell>
              <TableCell>{flujo.cuota}</TableCell>
              <TableCell>{flujo.amortizacion}</TableCell>
              <TableCell>{flujo.prima}</TableCell>
              <TableCell>{flujo.escudo}</TableCell>
              <TableCell>{flujo.flujobonista}</TableCell>
              <TableCell>{flujo.flujoactual}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  )
}
