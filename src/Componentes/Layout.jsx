import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav> 
        <a href="/">Home</a>
        <a href="/about">Bolsas</a>
        <a href="/dashboard">Contacto</a>
      </nav>
      <br />
      <Outlet />
    </div>
  );
}
export default Layout;

