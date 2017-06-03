import React from 'react'

//const Peliculas = () => (
class Peliculas extends React.Component{
  constructor(props) {
    super(props);
    this.state = {movies: [
        {
          id: 1,
          name: "Titanic",
          generos: ["Romance"],
          description: "JIndsoignsdgoidsngoids",
          codigo: "R-125",
          tiempo: "01-56",
          actores: ["Leonardo Dicaprio"]
        },
        {
          id: 2,
          name: "Iron Man",
          generos: ["Accion"],
          description: "JIndsoignsdgoidsngoids",
          codigo: "A-225",
          tiempo: "02-12",
          actores: ["Pulpo HDP"]
        },
        {
          id: 3,
          name: "Shreck",
          generos: ["Dibujo","Accion"],
          description: "JIndsoignsdgoidsngoids",
          codigo: "D-035",
          tiempo: "01-30",
          actores: ["Antonio Banderas","Wilson Apaza","Leonardo Dicaprio"]
        }
      ],
      name: "",
      generos: [],
      codigo: "",
      description: "",
      tiempo: "",
      actores: []
    },
    this._handleSubmit = this._handleSubmit.bind(this)
    this._handleChangeName = this._handleChangeName.bind(this)
  }
  _handleSubmit(){
  }
  _handleChangeName(e){
    this.setState({name: e.target.value})
    console.log(this.state.name)
  }
  render(){
    return(
      <div className="container">
        <h2>Peliculas</h2>

        <a className="waves-effect waves-light btn" href="#modal1"><i className="material-icons left">add</i>Agregar</a>
        <a className="waves-effect waves-light btn"><i className="material-icons left">edit</i>Editar</a>
        <a className="waves-effect waves-light btn"><i className="material-icons left">delete</i>Borrar</a>

        <br />
        <br />
        <div id="modal1" className="modal">
          <div className="modal-content">
            <h4>Agregar Nueva Pelicula</h4>
            <div className="row">
              <form className="col s12" onSubmit={this._handleSubmit()}>
                <div className="input-field col s6">
                  <label htmlFor="name">Nombre</label>
                  <input placeholder="" id="name" type="text" className="validate" onChange={this._handleChangeName} />
                </div>
                <div className="input-field col s6">
                  <label htmlFor="last_name">Genero</label>
                  <input placeholder="" id="generos" type="text" className="validate" />
                </div>
                <div className="input-field col s12">
                  <label htmlFor="first_name">Descripcion</label>
                  <input placeholder="" id="description" type="text" className="validate"/>
                </div>
                <div className="input-field col s4">
                  <label htmlFor="last_name">Codigo</label>
                  <input placeholder="" id="last_name" type="text" className="validate" />
                </div>
                <div className="input-field col s4">
                  <label htmlFor="last_name">Duracion</label>
                  <input placeholder="" id="last_name" type="text" className="validate" />
                </div>
                <div className="input-field col s4">
                  <label htmlFor="last_name">Fecha de Estreno</label>
                  <input placeholder="" type="date" className="datepicker" />
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
              <th>Pelicula</th>
              <th>Genero</th>
              <th>Codigo</th>
              <th>Duracion</th>
              <th>Actores</th>
            </tr>
          </thead>

          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie.id}>
                <td>{movie.id}</td>
                <td>{movie.name}</td>
                <td>
                  <ul>
                    {movie.generos.map((genero) => (
                      <li>{genero}</li>
                    ))}
                  </ul>
                </td>
                <td>{movie.codigo}</td>
                <td>{movie.tiempo}</td>
                <td>
                  <ul>
                    {movie.actores.map((actor) => (
                      <li>{actor}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    )
  }
}

export default Peliculas