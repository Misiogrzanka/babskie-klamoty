import React from 'react';

import {SearchContainer, Branding, MenuBar} from "../Molecules/header";




export const Header = () => {
	return (
		<div class='header'>
			<div class='header__brand-container'>
				<Branding />
                <SearchContainer />
			</div>
				<MenuBar />
		</div>
	);
};
