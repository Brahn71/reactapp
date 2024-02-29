import React from 'react';
import Header from './Componentes/Header';
import ListaBolsas from './Componentes/ListaBolsas';
import DetalleBolsa from './Componentes/DetalleBolsa';
import Footer from './Componentes/Footer';
import './App.css'

const bolsas = [
  { nombre: 'Kurt Geiger London', precio: 20.0 },
  { nombre: 'Kurt Geiger London Mini Kensington Crossbody', precio: 25.0 },
  { nombre: 'Bolsa 5', precio: 30.0 },
  { nombre: 'Bolsa 4', precio: 10.0 },
  { nombre: 'Bolsa 5', precio: 40.0 },
  { nombre: 'Bolsa 6', precio: 15.0 },
  { nombre: 'Bolsa 7', precio: 9.99 }
];

function App() {
  return (
    <div>
      <Header />
      <div className='App-header1'>
        <ListaBolsas bolsas={bolsas} />
        <DetalleBolsa detalleEspecifico="Detalles específicos de la bolsa" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
