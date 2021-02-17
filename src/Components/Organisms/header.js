import React from 'react';

import {SearchContainer} from "../Molecules"

export const Header = () => {
	return (
		<div class='header'>
			<div class='header__brand-container'>
				<div class="header__branding">
					<div class="header__branding-image">IMAGE</div>
				</div>
                <SearchContainer />
			</div>
			<div class='header__menu-container'>
                <ul>
                    <li>ITEM</li>
                    <li>ITEM</li>
                    <li>ITEM</li>
                    <li>ITEM</li>
                    <li>ITEM</li>
                </ul>
            </div>
		</div>
	);
};
