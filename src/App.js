import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './sass/App.scss';

import {
	CardsTemplate,
	HeaderTemplate,
	FooterTemplate,
} from './Components/Templates/index';
import { HomePage } from './Components/Pages';
import { Header } from './Components/Organisms';

function App() {
	return (
		<Router>
			<div class='App'>
				<HeaderTemplate />
				<Switch>
					<Route path='/home' component={HomePage} />
					<Route path='/clothes' component={CardsTemplate} />
					<Route component={Error} />
				</Switch>
				<FooterTemplate />
			</div>
		</Router>
	);
}

export default App;
