import React from 'react';
import MainSideBar from '../components/MainSideBar';
import MainHeader from '../components/MainHeader';
import MainHome from '../components/MainHome';
import MainSession from '../components/MainSession';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 'session'
		};
	}

	goto = (page) => {
		this.setState(() => {
			return {
				page: page
			};
		});
	};

	render() {
		let page = <MainHome goto={this.goto} />;
		if (this.state.page === 'session') {
			page = <MainSession />;
		}

		return (
			<div className="Main">
				<MainHeader ses={this.state.page === 'session'} page={this.state.page} />
				<MainSideBar goto={this.goto} />
				<div className="main_body">{page}</div>
			</div>
		);
	}
}
