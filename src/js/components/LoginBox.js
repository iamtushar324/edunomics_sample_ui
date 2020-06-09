import React from 'react';

export default class LoginBox extends React.Component {
	render() {
		return (
			<div className="LoginBox">
				<label htmlFor="username">Email Id / Phone Number</label>
				<input type="text" id="login_username" />
				<label htmlFor="username">Password</label>
				<input type="text" id="login_password" />
				<input type="button" value="Login" className="btn" />
			</div>
		);
	}
}
