import React from "react";

const Camara = () => {
  return (
    <>
      <div className="general">
        <div className="primerRenglon">
          <img src="img\big-data.png" alt="" className="Redonda" />
          <div>
            <h6>Soportes rigidos</h6>
            <h5>Cartón Microcanal/Corrugado</h5>
            <p>Fecha entrega estimada</p>
            <span>29/11/2023</span>
          </div>
          <input type="number" value="30" readOnly />
        </div>
        <div className="segundoRenglon">
          <span>Modelo 1</span>
          <input type="file" />
          <input type="number" />
        </div>
      </div>
    </>
  );
};

export default Camara;
