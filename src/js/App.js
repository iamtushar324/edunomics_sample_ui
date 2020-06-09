import React from 'react';
import Landing from './containers/Landing';
import Main from './containers/Main';
import SignUp from './containers/SignUp';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Switch>
						<Route path="/" component={Landing} exact={true} />
						<Route path="/sign-up" component={SignUp} exact={true} />
						<Route path="/DashBoard" component={Main} exact={true} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
