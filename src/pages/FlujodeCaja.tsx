import { Box, Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import apiFlujo from '../api/api.flujo';
import UserName from '../components/UserName';
import { FlujoCaja } from '../interfaces/Bono'

const FlujodeCaja1: FlujoCaja[] = [
  {
    idflujo: '1',
    idbono: '1',
    n: 1,
    bono: 12,
    interes: 12,
    cuota: 123,
    amortizacion: 123,
    prima: 12.2,
    escudo: 1.2,
    flujoemisor: 2.3,
    flujoemisorescudo: 3.4,
    flujobonista: 123,
    flujoactual: 12,
    faplazo: 1.2,
    convexidad: 1
  },
  {
    idflujo: '2',
    idbono: '1',
    n: 1,
    bono: 12,
    interes: 12,
    cuota: 123,
    amortizacion: 123,
    prima: 12.2,
    escudo: 1.2,
    flujoemisor: 2.3,
    flujoemisorescudo: 3.4,
    flujobonista: 123,
    flujoactual: 12,
    faplazo: 1.2,
    convexidad: 1
  },
  {
    idflujo:'3',
    idbono: '1',
    n: 1,
    bono: 12,
    interes: 12,
    cuota: 123,
    amortizacion: 123,
    prima: 12.2,
    escudo: 1.2,
    flujoemisor: 2.3,
    flujoemisorescudo: 3.4,
    flujobonista: 123,
    flujoactual: 12,
    faplazo: 1.2,
    convexidad: 1
  }
];

interface Props {
  userName: string;
}

export default function FlujodeCaja({userName}: Props) {
  const [ flujos, setFlujos] = useState<FlujoCaja[]>([])
  const { id } = useParams();

  useEffect(() => {
    id && apiFlujo.get(id)
      .then((response: any) => {
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
          <UserName userName={userName} />
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
          {FlujodeCaja1.map((flujo, index) => (
            <TableRow key={flujo.idflujo}>
              <TableCell>{index}</TableCell>
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
