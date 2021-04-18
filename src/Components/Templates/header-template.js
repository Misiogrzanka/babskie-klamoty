import React from 'react';

import { Header } from '../Organisms';
import { MenuBar } from '../Molecules/header';

export const HeaderTemplate = () => {
	return (
		<div class='header'>
			<Header />
			<MenuBar />
		</div>
	);
};
