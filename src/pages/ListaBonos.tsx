import React from 'react'
import { Box, Grid, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';

import UserName from '../components/UserName';
import { BonoResumen } from '../interfaces/Bono';

interface Props {
  userName: string;
}

const bonos: BonoResumen[] = [
  {
    id: 1,
    precio: 100,
    duracion: 1.34,
    duracion_modificada: 1.35,
    convexidad: 1.2,
    TIR: 1.4
  },
  {
    id: 2,
    precio: 100,
    duracion: 1.55,
    duracion_modificada: 1.85,
    convexidad: 2.2,
    TIR: 1.9
  },
  {
    id: 3,
    precio: 100,
    duracion: 2.0,
    duracion_modificada: 1.5,
    convexidad: 2.1,
    TIR: 1.1
  },
];

export default function ListaBonos({ userName }: Props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Grid container>
        <Grid item xs>
          <Typography component="h1" variant="h3" color="inherit" fontWeight="bold" gutterBottom>
            Lista de Bonos
          </Typography>
        </Grid>
        <Grid item>
          <UserName userName={userName} />
        </Grid>
      </Grid>
      <Table size="small" sx={{ mt: 4 }}>
        <TableHead>
          <TableRow>
            <TableCell>Nº</TableCell>
            <TableCell>Precio</TableCell>
            <TableCell>Duración</TableCell>
            <TableCell>Duración modificada</TableCell>
            <TableCell>Convexidad</TableCell>
            <TableCell>TIR</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bonos.map((bono, index) => (
            <TableRow key={bono.id}>
              <TableCell>{index}</TableCell>
              <TableCell>{bono.precio}</TableCell>
              <TableCell>{bono.duracion}</TableCell>
              <TableCell>{bono.duracion_modificada}</TableCell>
              <TableCell>{bono.convexidad}</TableCell>
              <TableCell>{bono.TIR}</TableCell>
              <TableCell>
                <IconButton>
                  <AttachMoneyIcon />
                </IconButton>
                <IconButton>
                  <DeleteOutlineRoundedIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  )
}
