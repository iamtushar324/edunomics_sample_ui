import React from 'react';
import LandingTop from '../components/LandingTop';
import LandingMiddle from '../components/LandingMiddle';

export default class Landing extends React.Component {
	render() {
		return (
			<div className="Landing">
				<LandingTop main={this.props.main} />
				<LandingMiddle />
			</div>
		);
	}
}
