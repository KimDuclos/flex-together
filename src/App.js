import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';

// CSS as needed
import './App.css';

// imported components for Routing
import Welcome from './frontend/components/welcome';
import WhoAreYou from './frontend/components/whoAreYou';
import TellMore from './frontend/components/tellMore';
import TimePicker from './frontend/components/timePicker';
import AddBuddy from './frontend/components/addBuddy';
import BuddyTimePicker from './frontend/components/buddyTimePicker';
import TimeAssignment from './frontend/components/timeAssignment';
import NoMatchTime from './frontend/components/noMatchTime';
import Thanks from './frontend/components/thanks';
import buddyInvite from './frontend/components/buddyInvite';

class App extends Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<div className="App">
				<Router>
					<Route exact path="/" component={Welcome} />
					<Route path="/whoAreYou" component={WhoAreYou} />
					<Route path="/tellMore" component={TellMore} />
					<Route path="/timePicker" component={TimePicker} />
					<Route path="/addBuddy" component={AddBuddy} />
					<Route path="/buddyTimePicker" component={BuddyTimePicker} />
					<Route path="/timeAssignment" component={TimeAssignment} />
					<Route path="/noMatchTime" component={NoMatchTime} />
					<Route path="/buddyInvite" component={buddyInvite} />
					<Route path="/thanks" component={Thanks} />
				</Router>
			</div>
		);
	}
}

export default App;
