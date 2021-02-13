import React from 'react';

import logo from "../../../img/logo.jpg"

export const Header = () => {
	return (
		<header class='header'>
			<img src={logo} alt={'Logo Komisu'} class='header__logo' />
			<div class='header__search'>
				<form action='#' class='header__search'>
					<input
						type='text'
						class='header__search-input'
						placeholder='Wyszukaj przedmiot'
					/>
					<button class='header__button'>
						{/* <svg class='header__search-icon'>
							<use xlinkHref='../../../img/sprite.svg#icon-magnifying-glass'></use>
						</svg> */}
					</button>
				</form>
			</div>
		</header>
	);
};
