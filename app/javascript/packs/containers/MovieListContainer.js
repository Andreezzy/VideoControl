import { connect } from 'react-redux'
import { fetchMovies, fetchMoviesSuccess, fetchMoviesFailure } from '../actions/actions_peliculas';
import Peliculas from '../components/navItems/movie/peliculas';


const mapStateToProps = (state) => {
    return {
        moviesList: state.peliculas.moviesList
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: () => {
            dispatch(fetchMovies()).then((response) => {
                !response.error ? dispatch(fetchMoviesSuccess(response.payload.data)) : dispatch(fetchMoviesFailure(response.payload.data));
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Peliculas);
