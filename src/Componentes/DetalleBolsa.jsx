import React from 'react';

const DetalleBolsa = ({ detalleEspecifico }) => (
  <div className='DetalleBolsa'>
    <h2>Detalle de la Bolsa</h2>
    {/* Utiliza la variable detalleEspecifico */}
    <p>{detalleEspecifico}</p>
  </div>
);

export default DetalleBolsa;
