import React from 'react'

class ModalFormMovie extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      generos: ["Accion","Romance","Dibujos"],
      name: "",
      generosChecked: [],
      codigo: "",
      description: "",
      tiempo: "",
      estreno: "",
      actores: [],
      edit: false
    }
    this._handleSubmit = this._handleSubmit.bind(this)
    this._handleChangeName = this._handleChangeName.bind(this)
    this._handleChangeOption = this._handleChangeOption.bind(this)
    this._handleChangeDescription = this._handleChangeDescription.bind(this)
    this._handleChangeCodigo = this._handleChangeCodigo.bind(this)
    this._handleChangeDuracion = this._handleChangeDuracion.bind(this)
    this._handleChangeEstreno = this._handleChangeEstreno.bind(this)
    this.handleSwitchEdit = this.handleSwitchEdit.bind(this)
    this.setMovieToEdit = this.setMovieToEdit.bind(this)
    this.clear = this.clear.bind(this)
  }
  clear(){
    this.setState((prevState) => ({
      name: '',
      generosChecked: [],
      check: false,
      description: '',
      codigo: '',
      tiempo: '',
      actores: [],
      estreno: ''
    }));
    $('#actores').materialtags('removeAll');
  }
  _handleSubmit(e){
    e.preventDefault();
    var newItem = {
      id: this.props.movies.length+1,
      name: this.state.name,
      generos: this.state.generosChecked,
      description: this.state.description,
      codigo: this.state.codigo,
      tiempo: this.state.tiempo,
      actores: this.state.actores.concat($("#actores").materialtags('items'))
    };
    if (this.state.edit) {
      this.props.handleEdit(newItem)
    }else{
      this.props.handleInsert(newItem)
    }
    this.clear()
  }
  _handleChangeName(e){
    this.setState({name: e.target.value})
  }
  _handleChangeOption(e){
    if(e.target.checked){
      this.setState({generosChecked: [...this.state.generosChecked,e.target.id]})
    }else{
      var a = this.state.generosChecked
      var index = a.indexOf(e.target.id)
      this.setState({generosChecked: [...a.slice(0,index),...a.slice(index+1)]})
    }
  }
  _handleChangeDescription(e){
    this.setState({description: e.target.value})
  }
  _handleChangeCodigo(e){
    this.setState({codigo: e.target.value})
  }
  _handleChangeDuracion(e){
    this.setState({tiempo: e.target.value})
  }
  _handleChangeEstreno(e){
    this.setState({estreno: e.target.value})
  }
  setMovieToEdit(){
    this.setState({
      id: this.props.movie.id,
      name: this.props.movie.name,
      generosChecked: this.props.movie.generos,
      description: this.props.movie.description,
      codigo: this.props.movie.codigo,
      tiempo: this.props.movie.tiempo,
    })
    this.props.movie.actores.map((e)=>(
      $("#actores").materialtags('add', e)
    ))
  }
  handleSwitchEdit(e){
    $('#actores').materialtags('removeAll');
    if (e) {
      console.log("Agregando")
      this.clear()
      this.setState({edit: false})
    }else{
      console.log("Editando")
      this.setMovieToEdit()
      this.setState({edit: true})
    }
  }
  render(){
    return(
      <div>
        <a id="agregar" className="waves-effect waves-light btn" onClick={()=>this.handleSwitchEdit(1)}><i className="material-icons left">add</i>Agregar</a>
        <a id="editar" className="waves-effect waves-light btn" onClick={()=>this.handleSwitchEdit()}><i className="material-icons left">edit</i>Editar</a>
        <a className="waves-effect waves-light btn"><i className="material-icons left">delete</i>Borrar</a>
        <br />
        <br />
        <div id="modal1" className="modal">
          <div className="modal-content">
            <h4>{this.state.edit ? "Editar Pelicula" : "Agregar Nueva Pelicula"}</h4>
            <div className="row">
              <form id="movieForm" className="col s12" onSubmit={this._handleSubmit}>
                <div className="input-field col s6">
                  <label htmlFor="name">Nombre</label>
                  <input id="name" type="text" className="validate" value={this.state.name} onChange={this._handleChangeName} />
                </div>
                <div className="input-field col s6">
                  <label htmlFor="">Genero</label><br /><br />
                  {this.state.generos.map((genero) => (
                    <p key={genero}>
                      <input type="checkbox" className="filled-in" id={genero} onChange={this._handleChangeOption} />
                      <label htmlFor={genero}>{genero}</label>
                    </p>
                  ))}
                </div>
                <div className="input-field col s12">
                  <label htmlFor="description">Descripcion</label>
                  <input id="description" type="text" className="validate" value={this.state.description} onChange={this._handleChangeDescription} />
                </div>
                <div className="input-field col s4">
                  <label htmlFor="codigo">Codigo</label>
                  <input id="codigo" type="text" className="validate" value={this.state.codigo} onChange={this._handleChangeCodigo} />
                </div>
                <div className="input-field col s4">
                  <label htmlFor="duracion">Duracion</label>
                  <input id="duracion" type="text" className="validate" value={this.state.tiempo} onChange={this._handleChangeDuracion} />
                </div>
                <div className="input-field col s4">
                  <label htmlFor="estreno">Fecha de Estreno</label>
                  <input id="estreno" type="text" className="validate" value={this.state.estreno} onChange={this._handleChangeEstreno} />
                </div>
                <div className="input-field col s4">
                  <label htmlFor="actores">Actores</label>
                  <input id="actores" type="text" data-role="materialtags" />
                </div>
                <div className="modal-footer">
                  <button>{'Add #' + (this.props.movies.length + 1)}</button>
                  <a id="cerrar" className="modal-action modal-close waves-effect waves-red btn-flat ">Disagree</a>
                  <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat ">Agree</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ModalFormMovie