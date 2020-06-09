import React from 'react';

export default class MainSideBar extends React.Component {
	render() {
		return (
			<div className="MainSideBar">
				<li
					onClick={() => {
						this.props.goto('home');
					}}
				>
					Home
				</li>
				<li
					onClick={() => {
						this.props.goto('session');
					}}
				>
					Session
				</li>
				<li>Downloads</li>
				<li>Setting</li>
				<li>About</li>
			</div>
		);
	}
}
