import React from 'react';
import facebook from '../../img/facebook.svg';
import instagram from '../../img/instagram.svg';
import twitter from '../../img/twitter.svg';

export default class LandingFooter extends React.Component {
	render() {
		return (
			<div className="LandingFooter">
				<h3>EDUNOMICS</h3>
				<h6>contact@edunomics.in</h6>
				<div className="social_btn">
					<img src={facebook} alt="" />
					<img src={twitter} alt="" />
					<img src={instagram} alt="" />
				</div>
				<div className="array">
					<span>JOIN US</span>
					<span>COOKIE POLICY</span>
					<span>TERMS OF USE</span>
					<span>TECH</span>
					<span>PRIVACY POLICY</span>
				</div>
			</div>
		);
	}
}
