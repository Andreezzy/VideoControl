import React from 'react'

const Historial = () => (
  <div className="container">
    <h2>Historial</h2>
    <br />
    <br />

    <div className="divider"></div>
    <table className="bordered highlight centered responsive-table">
      <thead>
        <tr>
          <th>Nro</th>
          <th>Pelicula</th>
          <th>Cliente</th>
          <th>Hora Entrada</th>
          <th>Hora Salida</th>
          <th>Cobro</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td>Titanic</td>
          <td>Calem</td>
          <td>09:24</td>
          <td>10:56</td>
          <td>S/5.00</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Titanic</td>
          <td>Yoel</td>
          <td>11:14</td>
          <td>12:45</td>
          <td>S/6.00</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Iron Man</td>
          <td>Gerson</td>
          <td>09:30</td>
          <td>10:18</td>
          <td>S/5.00</td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default Historial