import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from "./Componentes/Layout";
import Home from "./Componentes/Home";
import About from "./Componentes/About";
import Dashboard from "./Componentes/Dashboard";
import Default from "./Componentes/Default";



function App() {
  return (
    <div>
      <center>
      <h1 className='titi'>Tienda de bolsas</h1>
      <br />
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="about" element={<About />}/>
        <Route path="/" element={<Home />}/>
        <Route path="dashboard" element={<Dashboard />}/>
        <Route path="*" element={<Default />}/>
        </ Route>
      </Routes>
      </center>
      
    </div>
  );
}

export default App;
