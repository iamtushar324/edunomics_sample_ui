import React from 'react';
import Landing from './containers/Landing';
import Main from './containers/Main';

class App extends React.Component {
	main = () => {
		this.setState(() => {
			return {
				main: true
			};
		});
	};

	constructor(props) {
		super(props);
		this.state = {
			main: false
		};
	}

	render() {
		return <div className="App">{this.state.main ? <Main /> : <Landing main={this.main} />}</div>;
	}
}

export default App;
