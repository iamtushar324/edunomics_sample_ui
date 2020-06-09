import React from 'react';
import MainSideBar from '../components/MainSideBar';
import MainHeader from '../components/MainHeader';

export default class Main extends React.Component {
	render() {
		return (
			<div className="Main">
				<MainHeader />
				<MainSideBar />
				<div className="main_body" />
			</div>
		);
	}
}
