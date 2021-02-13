import React from 'react';
import ReactDOM from 'react-dom';

import { Footer, Header, Sidenav } from '../src/Components/Static/Layout';
// import Header from "../src/Components/Static/Layout/Header"

import './sass/App.scss';

function App() {
	return (
		<div className='App'>
			<Header />
      <Sidenav />
      <Footer />
		</div>
	);
}

export default App;
