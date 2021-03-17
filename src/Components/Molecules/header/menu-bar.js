import React from 'react';

export const MenuBar = () => {
	return (
		<div class='header__navigation'>
			<ul class='header__navigation-container'>
				<li>
					<button class='header__navigation-item'>Strona Główna</button>
				</li>
				<li>
					<button class='header__navigation-item'>Nowości</button>
				</li>
				<li>
					<button class='header__navigation-item'>Ubrania</button>
				</li>
				<li>
					<button class='header__navigation-item'>Wyprzedaż</button>
				</li>
				<li>
					<button class='header__navigation-item'>O nas</button>
				</li>
				<li>
					<button class='header__navigation-item'>Kontakt</button>
				</li>
			</ul>
		</div>
	);
};
