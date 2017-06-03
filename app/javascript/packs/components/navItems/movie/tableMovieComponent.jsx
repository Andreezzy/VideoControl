import React from 'react'

const TableMovieComponent = ({movies, handleSelect}) => (
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
      {movies.map((movie) => (
        <tr key={movie.id} onClick={ ()=>handleSelect(movie)} style={{background: movie.active ? 'green' : ''}}>
          <td>{movie.id}</td>
          <td>{movie.name}</td>
          <td>
            <ul>
              {movie.generos.map((genero) => (
                <li key={movie.generos.indexOf(genero)}>{genero}</li>
              ))}
            </ul>
          </td>
          <td>{movie.codigo}</td>
          <td>{movie.tiempo}</td>
          <td>
            <ul>
              {movie.actores.map((actor) => (
                <li key={movie.actores.indexOf(actor)}>{actor}</li>
              ))}
            </ul>
          </td>
        </tr>
      ))}
    </tbody>
  </table>

)

export default TableMovieComponent