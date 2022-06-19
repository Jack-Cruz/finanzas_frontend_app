import { Box, Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react'
import UserName from '../components/UserName';
import { FlujoCaja } from '../interfaces/Bono'

const FlujodeCaja1: FlujoCaja[] = [
  {
    id: 1,
    monto: 1000,
    cuota: 1000,
    bono: 100,
    amortizacion: 100,
    cupon: 100,
    escudo: 1000,
    flujo_bonista: 100,
    flujo_actual: 100,
  },
  {
    id: 2,
    monto: 10,
    cuota: 10,
    bono: 1,
    amortizacion: 1,
    cupon: 1,
    escudo: 100,
    flujo_bonista: 10,
    flujo_actual: 10,
  },
  {
    id: 3,
    monto: 105,
    cuota: 105,
    bono: 100,
    amortizacion: 10,
    cupon: 10,
    escudo: 11,
    flujo_bonista: 11,
    flujo_actual: 11,
  },
];

interface Props {
  userName: string;
}

export default function FlujodeCaja({userName}: Props) {
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
            <TableCell>Monto</TableCell>
            <TableCell>Bono</TableCell>
            <TableCell>Cupon (Interes)</TableCell>
            <TableCell>Cuota</TableCell>
            <TableCell>Escudo</TableCell>
            <TableCell>Amortizacion</TableCell>
            <TableCell>Flujo Bonista</TableCell>
            <TableCell>Flujo Actual</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {FlujodeCaja1.map((flujo, index) => (
            <TableRow key={flujo.id}>
              <TableCell>{index}</TableCell>
              <TableCell>{flujo.monto}</TableCell>
              <TableCell>{flujo.bono}</TableCell>
              <TableCell>{flujo.cuota}</TableCell>
              <TableCell>{flujo.cupon}</TableCell>
              <TableCell>{flujo.escudo}</TableCell>
              <TableCell>{flujo.amortizacion}</TableCell>
              <TableCell>{flujo.flujo_bonista}</TableCell>
              <TableCell>{flujo.flujo_actual}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  )
}
