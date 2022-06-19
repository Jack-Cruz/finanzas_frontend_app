import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import Dashboard from '../components/Dashboard'
import { User1 } from '../data/Data'
import BonoPage from '../pages/BonoPage'
import EasyFinanzas from '../pages/EasyFinanzas'
import FlujodeCaja from '../pages/FlujodeCaja'
import ListaBonos from '../pages/ListaBonos'
import MainPage from '../pages/MainPage'
import SignInPage from '../pages/SignInPage'
import SignUpPage from '../pages/SignUpPage'

const user = User1;

export default function MainRouter() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} >
        <Route index element={<EasyFinanzas/>} />
        <Route path="signin" element={<SignInPage/>} />
        <Route path="signup" element={<SignUpPage/>} />
        <Route path="easy-finanzas" element={<Dashboard/>} >
          <Route index element={<MainPage userName={user.name}/>} />
          <Route path="crearbono" element={<BonoPage userName={user.name}/>} />
          <Route path="listabonos" element={<ListaBonos userName={user.name}/>} />
          <Route path="flujocaja" element={<FlujodeCaja userName={user.name}/>} />
        </Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}