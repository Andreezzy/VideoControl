// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-tags'
import './css/custom.css'


import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk'
import logger from 'redux-logger'


import Root from './components/root'
import rootReducer from './reducers/index'

let store = createStore(rootReducer, applyMiddleware(promise, thunk, logger))

ReactDOM.render(
    <Root store={store} />,
    document.getElementById("app")
)
