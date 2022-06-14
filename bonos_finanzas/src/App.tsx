import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './pages/MainPage';
import BonoPage from './pages/BonoPage';
import { User1 } from './data/Data';

const user = User1

function App() {
  return (
    <BonoPage userName={user.name} />
  );
}

export default App;
