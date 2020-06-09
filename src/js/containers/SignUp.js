import React from 'react';
import signup from '../../img/signup.jpg';

export default class SignUp extends React.Component {
	render() {
		return (
			<div className="SignUp">
				<img className="signup_img" src={signup} alt="" />
				<div className="inputs_con">
					<h2>Sign Up</h2>

					<label htmlFor="name">Name</label>
					<input type="text" name="name" id="name" />
					<label htmlFor="email">Email Id</label>
					<input type="text" name="email" id="reg_email" />
					<label htmlFor="email">Password</label>
					<input type="password" name="email" id="reg_pass" />
					<label htmlFor="email">Mobile Number</label>
					<input type="text" name="email" id="reg_num" />
					<button>Sign Up</button>
				</div>
			</div>
		);
	}
}
