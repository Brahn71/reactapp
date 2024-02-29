import React from 'react';

const Bolsa = ({ nombre, precio }) => (
  <div className='Bolsa'>
    <h3>{nombre}</h3>
    <p>Precio: ${precio}</p>
    {precio >= 25 && <p>¡Bolsa de lujo!</p>}
    {/* Agrega más detalles según sea necesario */}
  </div>
);
export default Bolsa;