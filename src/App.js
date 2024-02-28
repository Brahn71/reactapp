import React from 'react';
import Header from './Componentes/Header';
import ListaBolsas from './Componentes/ListaBolsas';
import DetalleBolsa from './Componentes/DetalleBolsa';
import Footer from './Componentes/Footer';
import './App.css'

const bolsas = [
  { nombre: 'Bolsa 1', precio: 20.0 },
  { nombre: 'Bolsa 2', precio: 25.0 },
  { nombre: 'Bolsa 3', precio: 30.0 },
];

function App() {
  return (
    <div>
      <Header />
      <div>
      <ListaBolsas bolsas={bolsas} />
      <DetalleBolsa />
      </div>
      <Footer />
    </div>
  );
}

export default App;
