import React, { useState, useEffect } from 'react';

const About = () => {
  const bolsas = [
    { descripcion: "", nombre: "Bolsa 1", precio: 10.99, imagen: "https://m.media-amazon.com/images/I/61ixsTsAt4L._AC_SX679_.jpg" },
    { descripcion: "", nombre: "Bolsa 2", precio: 15.50, imagen: "https://m.media-amazon.com/images/I/61X9wth03xL._AC_SX679_.jpg" },
    { descripcion: "", nombre: "Bolsa 3", precio: 8.75, imagen: "https://m.media-amazon.com/images/I/618BOU3xT3L._AC_SX679_.jpg" },
    { descripcion: "", nombre: "Bolsa 4", precio: 12.30, imagen: "https://m.media-amazon.com/images/I/71bxFYpG2QL._AC_SX679_.jpg" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bolsas.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [bolsas.length]); // Agregado bolsas.length como dependencia

  return (
    <div>
      <div style={styles.container}>
        {bolsas.map((bolsa, index) => (
          <div key={index} style={styles.bolsaContainer(index === currentIndex)}>
            <h2>Bolsa {index + 1}</h2>
            <img
              src={bolsa.imagen}
              alt={`Imagen de ${bolsa.nombre}`}
              style={styles.imagen}
            />
            <p>Descripción: {bolsa.descripcion}</p>
            <p>Precio: ${bolsa.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px'
  },
  bolsaContainer: (isSelected) => ({
    border: '1px solid #ccc',
    padding: '20px',
    margin: '0 10px',
    background: isSelected ? '#e0e0e0' : 'white',
    borderRadius: '5px',
    textAlign: 'center'
  }),
  imagen: {
    maxWidth: '100%',
    maxHeight: '100px',
    margin: '10px 0'
  }
};

export default About;
