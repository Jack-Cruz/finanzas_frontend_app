import React, { useContext, useEffect, useState } from 'react'
import { Box, Button, Grid, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import EditIcon from '@mui/icons-material/Edit';

import UserName from '../components/UserName';
import { BonoResumen } from '../interfaces/Bono';
import apiBonos from '../api/api.bonos';
import apiBonosResumen from '../api/api.bonoresumen';
import { UserContext } from '../context/usercontext';
import { Link } from 'react-router-dom';



export default function ListaBonos() {
  const [bonosresumenes, setBonosResumenes] = useState<BonoResumen[]>([]);
  const { state } = useContext(UserContext);

  const deletebono = (idbono: string) => {
    state.idusuario && apiBonos.delete(state.idusuario, idbono)
      .then((response: any) => {
        console.log(response.data);
        setBonosResumenes(bonosresumenes.filter(bono => bono.idbono !== idbono))
      }).catch((error: Error) => {
        window.alert('Error de sistema')
        console.log(error)
      })
  }

  useEffect(() => {
    state.idusuario && apiBonosResumen.get(state.idusuario)
      .then((response: any) => {
        console.log(response.data);
        setBonosResumenes(response.data);
      })
      .catch((error: Error) => {
        window.alert("Error de sistema");
        console.log(error);
      })
  }, []);
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Grid container>
        <Grid item xs>
          <Typography component="h1" variant="h3" color="inherit" fontWeight="bold" gutterBottom>
            Lista de Bonos
          </Typography>
        </Grid>
        <Grid item>
          <UserName userName={state.usuario ? state.usuario : 'No usuario'} />
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
            <TableCell>Moneda</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bonosresumenes.map((bonoresumen, index) => (
            <TableRow key={bonoresumen.idresumen}>
              <TableCell>{index}</TableCell>
              <TableCell>{bonoresumen.precio}</TableCell>
              <TableCell>{bonoresumen.duracion}</TableCell>
              <TableCell>{bonoresumen.duracionmod}</TableCell>
              <TableCell>{bonoresumen.convexidad}</TableCell>
              <TableCell>{bonoresumen.tirbonista}</TableCell>
              <TableCell>{bonoresumen.moneda == '' ? 'No especificado' : bonoresumen.moneda}</TableCell>
              <TableCell>
                <IconButton component={Link} to={`/easy-finanzas/flujocaja/${bonoresumen.idbono}`}>
                  <AttachMoneyIcon />
                </IconButton>
                <IconButton component={Button} onClick={() => deletebono(bonoresumen.idbono)}>
                  <DeleteOutlineRoundedIcon />
                </IconButton>
                <IconButton component={Link} to={`/easy-finanzas/crearbono/${bonoresumen.idbono}`}>
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  )
}
