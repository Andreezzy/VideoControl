import React from 'react'
import PropTypes from 'prop-types'

class Login extends React.Component{
	render() {
		return(
			<div className="container">
				<div className="card-panel center light-green lighten-2">
					<h3>Login</h3>
	        <div className="row">
	        	<div className="input-field col s2"></div>
					  <form className="col s8">
					    <div className="row">
					    	<div className="input-field col s2"></div>
				        <div className="input-field col s8">
				          <input id="email" type="email" className="validate" />
				          <label htmlFor="email" data-error="wrong" data-success="right">Email</label>
				        </div>
				        <div className="input-field col s2"></div>
				      </div>
					    <div className="row">
					    	<div className="input-field col s2"></div>
					      <div className="input-field col s8">
					        <input id="password" type="password" className="validate"/>
					        <label htmlFor="password">Password</label>
					      </div>
					      <div className="input-field col s2"></div>
					    </div>
					    <div className="row">
					    	<div className="input-field col s2"></div>
					      <div className="input-field col s8">
					        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
								    <i className="material-icons right">send</i>
								  </button>
					      </div>
					      <div className="input-field col s2"></div>
					    </div>
					  </form>
					  <div className="input-field col s2"></div>
					</div>
				</div>
			</div>
		)
	}
}

export default Login