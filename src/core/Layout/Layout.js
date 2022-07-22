import React from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import style from "./Layout.module.scss";

const Layout = ({ children }) => {
   const navigate = useNavigate();

   const logout = () => {
      navigate("/auth/login");
   };

   return (
      <div className={style.container}>
         <header>
            <Link to="/home"> Mi condominio</Link>
            <nav>
               <ul>
                  <li>
                     <NavLink
                        to="/user"
                        className={({ isActive }) => (isActive ? "active" : undefined)}>
                        Usuarios
                     </NavLink>
                  </li>
                  <li>Mis pagos</li>
                  <li>Mis deudas</li>
                  <li>Caja chica</li>
                  <li>Reportería</li>
                  <li>
                     <button onClick={logout}>Logout</button>
                  </li>
               </ul>
            </nav>
         </header>
         <main>{children ? children : <Outlet />}</main>
         <footer>© 2022 Derechos reservados</footer>
      </div>
   );
};

export default Layout;
