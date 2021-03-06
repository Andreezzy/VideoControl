import React from 'react'

import TableMovieComponent from './tableMovieComponent'
import ModalFormMovie from './modalFormMovie'

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
          actores: ["Leonardo Dicaprio"],
          active: false
        },
        {
          id: 2,
          name: "Iron Man",
          generos: ["Accion"],
          description: "JIndsoignsdgoidsngoids",
          codigo: "A-225",
          tiempo: "02-12",
          actores: ["Pulpo HDP"],
          active: false
        },
        {
          id: 3,
          name: "Shreck",
          generos: ["Dibujo","Accion"],
          description: "JIndsoignsdgoidsngoids",
          codigo: "D-035",
          tiempo: "01-30",
          actores: ["Antonio Banderas","Wilson Apaza","Leonardo Dicaprio"],
          active: false
        }
      ],
      active: {
          name: "",
          generos: [],
          description: "",
          codigo: "",
          tiempo: "",
          actores: [],
          active: false
        },
    }
    this.handleInsert = this.handleInsert.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }
  componentWillMount() {
    this.props.fetchMovies();
  }
  handleInsert(newItem){
    this.setState((prevState) => ({
      movies: prevState.movies.concat(newItem),
    }));
  }
  handleSelect(e){
    this.state.movies.map((movie)=>{
      this.setState({active: Object.assign(movie,{active: false})})
    })
    this.state.movies.map((movie)=>{
      if (movie.id == e.id) {
        this.setState({active: Object.assign(movie,{active: true})})
      }
    })
  }
  handleEdit(e){
    //console.log("VALOR DE MOVIE => ", e)
  }
  renderMovies(movies) {
    console.log(movies)
    return movies.map((movie) => {
      return (
        <li key={movie.id}>
          <h3>{movie.title} - {movie.code}</h3>
        </li>
      );
    });
  }
  render(){

      const { movies, loading, error } = this.props.moviesList;

      if(loading) {
        return <div className="container"><h1>Movies</h1><h3>Loading...</h3></div>
      } else if(error) {
        return <div className="alert alert-danger">Error: {error.message}</div>
      }
    return(
      <div className="container">
        <h2>Peliculas</h2>

        <ModalFormMovie movies={this.state.movies} movie={this.state.active}handleInsert={this.handleInsert} handleEdit={this.handleEdit}/>
        <h1 onClick={()=>this.handleEdit()}>Click me!</h1>
        <h1>Posts</h1>
        <ul className="list-group">
          {this.renderMovies(movies)}
        </ul>

        <div className="divider"></div>
        <TableMovieComponent movies={this.state.movies} handleSelect={this.handleSelect} />
      </div>

    )
  }
}

export default Peliculas