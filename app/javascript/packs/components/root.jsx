import React from 'react';
import PropTypes from 'prop-types'
import { Provider } from 'react-redux';
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import Login from './login'
import Home from './navItems/home'
import Clientes from './navItems/clientes'
import Historial from './navItems/historial'
//import Peliculas from './navItems/movie/peliculas'
import Peliculas from '../containers/MovieListContainer'
import Reportes from './navItems/reportes'

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div>
                <nav>
                    <div className="nav-wrapper green darken-2">
                        <Link to="/"><a href="#!" className="brand-logo"><i className="material-icons">cloud</i>Logo</a></Link>
                        <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><Link to="/"><i className="material-icons">view_list</i></Link></li>
                            <li><Link to="/clientes"><i className="material-icons">person_pin</i></Link></li>
                            <li><Link to="/historial"><i className="material-icons">recent_actors</i></Link></li>
                            <li><Link to="/peliculas"><i className="material-icons">movie</i></Link></li>
                            <li><Link to="/reportes"><i className="material-icons">equalizer</i></Link></li>
                            <li><a className="dropdown-button" href="#!" data-activates="dropdown1"><i className="material-icons right">settings_power</i></a></li>
                            <ul id="dropdown1" className="dropdown-content">
                                <li><a href="#!">Perfil</a></li>
                                <li className="divider"></li>
                                <li><a href="#!">Cerrar Session</a></li>
                            </ul>
                        </ul>
                        <ul className="side-nav" id="mobile-demo">
                            <li><Link to="/"><i className="material-icons">view_list</i></Link></li>
                            <li><Link to="/clientes"><i className="material-icons">person_pin</i></Link></li>
                            <li><Link to="/historial"><i className="material-icons">recent_actors</i></Link></li>
                            <li><Link to="/peliculas"><i className="material-icons">movie</i></Link></li>
                            <li><Link to="/reportes"><i className="material-icons">equalizer</i></Link></li>
                        </ul>
                    </div>
                </nav>
                <Route exact path="/" component={Home}/>
                <Route path="/clientes" component={Clientes}/>
                <Route path="/historial" component={Historial}/>
                <Route path="/peliculas" component={Peliculas}/>
                <Route path="/reportes" component={Reportes}/>
            </div>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;