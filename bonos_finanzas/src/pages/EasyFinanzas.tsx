import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/easy_finanzas.jpg";

export default function EasyFinanzas() {
  const location = useLocation();

  return (
    <>
      <div className="container p-4">
        <div className="row">
          <div className="col-md-7">
            <h1 className="text-dark">Easy-Finanzas</h1>
          </div>
          <div className="col-md-5">
            <div className="row">
              <Link to={`${location.state}/signin`}>
                Iniciar Sesion
              </Link>
              <div className="col-md-2"></div>
              <Link to={`${location.state}/signup`}>
                Registro
              </Link>
            </div>
          </div>
        </div>
      </div>
      <br />

      <div className="row bg-secondary">
        <div className="col-md-7">
          <img src={logo} alt="imagen finanzas_logo" width="850" height="380" />
        </div>
        <div className="col-md-5">
          <h1 className="text-center align-middle p-5 mt-5 text-dark bg-secondary">
            Manejar tus finanzas nunca fue tan fácil
          </h1>
        </div>
      </div>

      <div className="row bg-primary p-5">
        <div className="col-md-3 p-5">
            <h2 className="text-center">Easy-Finanzas</h2>
        </div>
        <div className="col-md-9 p-5">
            <p className="text-dark text-center">Copyright © Easy Finanzas 2022 Todos los derechos reservados.</p>
        </div>
      </div>
    </>
  );
}
