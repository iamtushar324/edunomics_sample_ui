import React from 'react';
import LoginBox from './LoginBox';

export default class LandingTop extends React.Component {
	loginToggle = () => {
		this.setState((prev) => {
			return {
				islogin: !prev.islogin
			};
		});
	};

	constructor(props) {
		super(props);
		this.state = {
			islogin: false
		};
	}

	render() {
		return (
			<div className="LandingTop">
				<div className="landing_top_head">
					<div>
						<span>Welcome To Edunomics</span>
					</div>
					<div className="btn_con">
						<li className="btn log_btn" onClick={this.loginToggle}>
							Log In
						</li>
						<li className="btn sign_btn">Sign Up</li>
					</div>
				</div>
				{this.state.islogin ? <LoginBox main={this.props.main} /> : null}

				<div className="landing_top_middle">
					<h1>WHERE DO YOU WANT TO GO TODAY?</h1>
					<p>Share your ultimate tracel bucket list with us</p>
				</div>
			</div>
		);
	}
}
