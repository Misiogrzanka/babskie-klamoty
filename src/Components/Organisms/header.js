import React from 'react';

import { SearchContainer, Branding } from '../Molecules/header';

export const Header = () => {
	return (
		<div class='header__brand-container'>
			<Branding />
			<SearchContainer />
		</div>
	);
};
