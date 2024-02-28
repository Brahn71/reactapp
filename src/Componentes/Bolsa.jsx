import React from 'react';

const Bolsa = ({ nombre, precio }) => (
  <div>
    <h3>{nombre}</h3>
    <p>Precio: ${precio}</p>
    {/* Agrega más detalles según sea necesario */}
  </div>
);

export default Bolsa;