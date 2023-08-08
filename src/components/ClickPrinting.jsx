import React, { useEffect } from "react";
import Upload from "./Upload";

const Work = ({ Items, id }) => {
  // console.log(Items);

  useEffect(() => {
    first;

    return () => {
      second;
    };
  }, [third]);

  const num = 3;
  const items = ["modelo:1", "modelo:2", "modelo:3"];
  return (
    <>
      <div className="detailwork">
        <div className="headDetailwork">
          <div className="imgRound">
            <img
              src="https://content.click2printsolutions.com/thumb/expositores-carton-SUELO_252X156-da69f.jpg"
              alt="Imagen descriptiva de producto"
            />
          </div>

          <div key={1} className="infoHeadDetailWork">
            <h3>Soportes rígidos</h3>
            <h2>Cartón Microcanal / Corrugado</h2>

            <span>
              Fecha entrega estimada <b>29/11/2023</b>
            </span>
          </div>
          <div className="totalcount">
            <div className="inner_form_blk">
              <div className="inner_num_bg">
                <section className="inner_text">
                  <input
                    type="number"
                    id={`unidades`}
                    placeholder="0"
                    disabled
                    value="30"
                  ></input>
                  <div className="h6">Total Unidades</div>
                </section>
              </div>
            </div>
          </div>
        </div>

        <ul>
          {items.map((item, index) => (
            <Upload key={index} num={item} />
          ))}
        </ul>
        <div className="impresion">
          <ul>
            <li>material</li>
            {/* <li>Carton Microcanal</li>
            <li>base</li>
            <li>20</li> */}
          </ul>
        </div>
        <div className="instruccionesPlantilla">
          <ul>
            <li className="on">
              <a
                href="https://content.click2printsolutions.com/archives/clickprinting-instrucciones-lonas-publicitarias-83045.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="bookico"></span>
                <span>Instrucciones</span>
              </a>
            </li>
            <li className="on">
              <a href="/" id="template_link_pdf">
                <span className="noteco"></span>
                <span>Descarga Plantilla</span>
              </a>
            </li>
          </ul>
        </div>

        <a href="i" className="tramitar_pedido">
          <br />
          Confirmar envío de arhicos
        </a>
      </div>
    </>
  );
};

export default Work;
