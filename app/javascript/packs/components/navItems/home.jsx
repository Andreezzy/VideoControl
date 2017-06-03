import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

import React from 'react'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 90, 
      cabinas: [
        {
          sala: 1,
          pelicula: "Titanic",
          horaEntrada: "10:34",
          horaSalida: "11:54",
          precio: 5.00,
          estado: "OCUPADO",
          consumos: 1.30
        },
        {
          sala: 2,
          pelicula: "Spiderman",
          horaEntrada: "09:34",
          horaSalida: "10:44",
          precio: 5.00,
          estado: "OCUPADO",
          consumos: 1.30
        },
        {
          sala: 3,
          pelicula: "",
          horaEntrada: "",
          horaSalida: "",
          precio: "",
          estado: "DISPONIBLE",
          consumos: ""
        },
        {
          sala: 4,
          pelicula: "El Capitan America",
          horaEntrada: "10:09",
          horaSalida: "11:37",
          precio: 5.00,
          estado: "OCUPADO",
          consumos: 1.30
        },
        {
          sala: 5,
          pelicula: "",
          horaEntrada: "",
          horaSalida: "",
          precio: "",
          estado: "DISPONIBLE",
          consumos: ""
        },
        {
          sala: 6,
          pelicula: "El Capitan America",
          horaEntrada: "10:09",
          horaSalida: "11:37",
          precio: 5.00,
          estado: "OCUPADO",
          consumos: 1.30
        },
        {
          sala: 7,
          pelicula: "El Capitan America",
          horaEntrada: "10:09",
          horaSalida: "11:37",
          precio: 5.00,
          estado: "OCUPADO",
          consumos: 1.30
        },
        {
          sala: 8,
          pelicula: "",
          horaEntrada: "",
          horaSalida: "",
          precio: "",
          estado: "DISPONIBLE",
          consumos: ""
        },
        {
          sala: 9,
          pelicula: "El Capitan America",
          horaEntrada: "10:09",
          horaSalida: "11:37",
          precio: 5.00,
          estado: "OCUPADO",
          consumos: 1.30
        },
        {
          sala: 10,
          pelicula: "",
          horaEntrada: "",
          horaSalida: "",
          precio: "",
          estado: "DISPONIBLE",
          consumos: ""
        },
        {
          sala: 11,
          pelicula: "El Capitan America",
          horaEntrada: "10:09",
          horaSalida: "11:37",
          precio: 5.00,
          estado: "OCUPADO",
          consumos: 1.30
        },
        {
          sala: 12,
          pelicula: "El Capitan America",
          horaEntrada: "10:09",
          horaSalida: "11:37",
          precio: 5.00,
          estado: "OCUPADO",
          consumos: 1.30
        },
      ]
    }
  }
  tick(){
    this.setState((prevState) => ({
      seconds: prevState.seconds + 1
    }))
  }
  componentDidMount() {
    //this.interval = setInterval(() => this.tick(), 1000);
  }
  setHour(seconds) {
    //https://stackoverflow.com/questions/6312993/javascript-seconds-to-time-string-with-format-hhmmss
    // multiply by 1000 because Date() requires miliseconds
    var date = new Date(seconds * 1000);
    var hh = date.getUTCHours();
    var mm = date.getUTCMinutes();
    var ss = date.getSeconds();
    // If you were building a timestamp instead of a duration, you would uncomment the following line to get 12-hour (not 24) time
    // if (hh > 12) {hh = hh % 12;}
    // These lines ensure you have two-digits
    if (hh < 10) {hh = "0"+hh;}
    if (mm < 10) {mm = "0"+mm;}
    if (ss < 10) {ss = "0"+ss;}
    // This formats your string to HH:MM:SS
    return hh+":"+mm+":"+ss;
  }
  render(){
    return(
      <div className="container">
        <h2>Dashboard</h2>

        <a className="waves-effect waves-light btn" href="#modal1"><i className="material-icons left">add</i>Agregar</a>
        <a className="waves-effect waves-light btn"><i className="material-icons left">edit</i>Editar</a>
        <a className="waves-effect waves-light btn"><i className="material-icons left">delete</i>Borrar</a>
        
        <br />
        <br />
        <div id="modal1" className="modal">
          <div className="modal-content">
            <h4>Agregar Nueva Sala</h4>
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
              <th>Sala</th>
              <th>Pelicula</th>
              <th>Hora Inicio</th>
              <th>Hora Salida</th>
              <th>Precio</th>
              <th>Estado</th>
              <th>Consumos</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {this.state.cabinas.map((cabina) => (
              <tr key={cabina.sala}>
                <td>{cabina.sala}</td>
                <td>{cabina.pelicula}</td>
                <td>{cabina.horaEntrada}</td>
                <td>{cabina.horaSalida}</td>
                <td>{cabina.precio}</td>
                <td>{cabina.estado}</td>
                <td>{cabina.consumos}</td>
                <td>{(cabina.precio+cabina.consumos==0) ? "" : `S/${cabina.precio+cabina.consumos}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="divider"></div>
      </div>
    )
  }
}

export default Home