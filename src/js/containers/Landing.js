import React from 'react';
import LandingTop from '../components/LandingTop';
import LandingMiddle from '../components/LandingMiddle';
import LandingFooter from '../components/LandingFooter';

export default class Landing extends React.Component {
	render() {
		return (
			<div className="Landing">
				<LandingTop main={this.props.main} signup={this.props.signup} />
				<LandingMiddle />
				<LandingFooter />
			</div>
		);
	}
}
