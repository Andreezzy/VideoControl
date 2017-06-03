import React from 'react'

//const Clientes = () => (
class Clientes extends React.Component{
  render(){
    return(
      <div className="container">
        <h2>Clientes</h2>

        <a className="waves-effect waves-light btn" href="#modal1"><i className="material-icons left">add</i>Agregar</a>
        <a className="waves-effect waves-light btn"><i className="material-icons left">edit</i>Editar</a>
        <a className="waves-effect waves-light btn"><i className="material-icons left">delete</i>Borrar</a>
        
        <br />
        <br />
        <div id="modal1" className="modal">
          <div className="modal-content">
            <h4>Agregar Nuevo Cliente</h4>
            <div className="row">
              <form className="col s12">
                <div className="input-field col s6">
                  <label htmlFor="first_name">First Name</label>
                  <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
                </div>
                <div className="input-field col s6">
                  <label htmlFor="last_name">Last Name</label>
                  <input id="last_name" type="text" className="validate" />
                </div>
              </form>
            </div>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-action modal-close waves-effect waves-red btn-flat ">Disagree</a>
            <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat ">Agree</a>
          </div>
        </div>

        <div className="divider"></div>
        <table className="bordered highlight centered responsive-table">
          <thead>
            <tr>
              <th>Nro</th>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Codigo</th>
              <th>Promociones</th>
              <th>Num. Vistos</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Calem</td>
              <td>Ichuta Medina</td>
              <td>423</td>
              <td>35</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Yoel</td>
              <td>Capia Jacho</td>
              <td>296</td>
              <td>8</td>
              <td>25</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Gerson</td>
              <td>Apaza Mamani</td>
              <td>634</td>
              <td>11</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
  
export default Clientes