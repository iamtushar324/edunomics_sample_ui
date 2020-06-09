import React from 'react';

export default class MainHeader extends React.Component {
	render() {
		return (
			<div className="MainHeader">
				{this.props.page === 'session' ? <span>Home/Sessions</span> : <span>Welcome To Edunomics</span>}
				{this.props.ses && (
					<li id="drop">
						Select Class
						<div className="list">
							<li>
								Class 11
								<div className="list2 one">
									<li>
										Maths
										<div className="list3">
											<li>Math</li>
											<li>Sets</li>
											<li>Sets</li>
											<li>Sets</li>
											<li>Sets</li>
											<li>Sets</li>
											<li>Sets</li>
										</div>
									</li>
									<li>
										Physics
										<div className="list3">
											<li>Phy</li>
											<li>Sets</li>
											<li>Sets</li>
											<li>Sets</li>
											<li>Sets</li>
											<li>Sets</li>
											<li>Sets</li>
										</div>
									</li>
								</div>
							</li>
							<li>
								Class 12
								<div className="list2 two">
									<li>
										English
										<div className="list3">
											<li>Eng</li>
											<li>Sets</li>
											<li>Sets</li>
											<li>Sets</li>
											<li>Sets</li>
											<li>Sets</li>
											<li>Sets</li>
										</div>
									</li>
									<li>
										Physics
										<div className="list3">
											<li>Phy</li>
											<li>Sets</li>
											<li>Sets</li>
											<li>Sets</li>
											<li>Sets</li>
											<li>Sets</li>
											<li>Sets</li>
										</div>
									</li>
								</div>
							</li>
						</div>
					</li>
				)}

				<li className="my_acc">
					My Account
					<div className="list">
						<li>My Profile</li>
						<li>My Profile</li>
						<li>My Profile</li>
						<li>My Profile</li>
						<li>Logout</li>
					</div>
				</li>
			</div>
		);
	}
}
