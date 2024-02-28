import React from 'react';
import Bolsa from './Bolsa';

const ListaBolsas = ({ bolsas }) => (
  <div>
    <h2>Lista de Bolsas</h2>
    {bolsas.map((bolsa, index) => (
      <Bolsa key={index} {...bolsa} />
    ))}
  </div>
);

export default ListaBolsas;