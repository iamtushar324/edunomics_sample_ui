import React from 'react';

export default class MainHome extends React.Component {
	render() {
		return (
			<div className="MainHome">
				<div className="cate_con">
					<div className="duo">
						{' '}
						<div className="cate">
							<h2
								onClick={() => {
									this.props.goto('session');
								}}
							>
								All Interactive Session
							</h2>
						</div>
						<div className="cate">
							<h2>Practice Questions</h2>
						</div>
					</div>
					<div className="duo">
						<div className="cate">
							<h2>Downloads</h2>
						</div>
						<div className="cate">
							<h2>Ask Questions</h2>
						</div>
					</div>
				</div>
				<div className="m">
					<div className="info">
						<h2>Topics Converd</h2>
						<hr />
					</div>
					<div className="info">
						<h2>Topics Converd</h2>
						<hr />
					</div>
					<div className="info b">
						<h2>Topics Converd</h2>
						<hr />
					</div>
				</div>
			</div>
		);
	}
}
