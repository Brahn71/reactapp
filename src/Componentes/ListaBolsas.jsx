import React from 'react';
import Bolsa from './Bolsa';

const ListaBolsas = ({ bolsas }) => (
  <div className='ListaBolsas'>
    {bolsas.map((bolsa, index) => (
      <Bolsa key={index} nombre={bolsa.nombre} precio={bolsa.precio} />
    ))}
  </div>
);


export default ListaBolsas;