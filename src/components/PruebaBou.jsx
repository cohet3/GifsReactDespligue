import React from "react";

const PruebaBou = () => {
  return (
    <>
      <div class="stiloPrueba">
        <div>
          <h2>Gracias hemos recibido tu pago correctamente</h2>
          <h4>
            {" "}
            Estamos trabajado duro para que se vea la baina como quieres pero
            tengo q escribir un parrafo mas largo funciona el salto de linea mmh
            entiendo
          </h4>
          <button>Pulsame wey</button>

          <table>
            <tr>
              <td>John</td>
              <td>Doe</td>
            </tr>
            <tr>
              <td>Jane</td>
              <td>Doe</td>
            </tr>
          </table>

          <table>
            <tr>
              <th>First name</th>
              <th>Last name</th>
            </tr>
            <tr>
              <td>John</td>
              <td>Doe</td>
            </tr>
            <tr>
              <td>Jane</td>
              <td>Doe</td>
            </tr>
          </table>

          <table>
            <thead>
              <tr>
                <th>Header content 1</th>
                <th>Header content 2</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <td>Footer content 1</td>
                <td>Footer content 2</td>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <td>Body content 1</td>
                <td>Body content 2</td>
              </tr>
            </tbody>
          </table>

          <table>
            <colgroup span="4" class="columns"></colgroup>
            <tr>
              <th>Countries</th>
              <th>Capitals</th>
              <th>Population</th>
              <th>Language</th>
            </tr>
            <tr>
              <td>USA</td>
              <td>Washington D.C.</td>
              <td>309 million</td>
              <td>English</td>
            </tr>
            <tr>
              <td>Sweden</td>
              <td>Stockholm</td>
              <td>9 million</td>
              <td>Swedish</td>
            </tr>
          </table>
        </div>
        <div>
          <img class="imagen" src="./img/big-data.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default PruebaBou;
