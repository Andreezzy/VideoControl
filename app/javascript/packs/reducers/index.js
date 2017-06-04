import { combineReducers } from 'redux'
import PeliculasReducer from './PeliculasReducers/reducer_peliculas';

const rootReducer = combineReducers({
    peliculas: PeliculasReducer,
    visibilityFilter: function(state="MOuse", action) { return state}
})

export default rootReducer