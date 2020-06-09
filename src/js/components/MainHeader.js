import React from 'react';

export default class MainHeader extends React.Component {
	render() {
		return (
			<div className="MainHeader">
				<span>Welcome To Edunomics</span>

				<li id="drop">
					Class
					<div className="list">
						<li>Class 11</li>
						<li>Class 12</li>
					</div>
				</li>
			</div>
		);
	}
}
