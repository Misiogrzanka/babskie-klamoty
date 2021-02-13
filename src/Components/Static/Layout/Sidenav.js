import React from 'react';

import { Footer } from './Footer';

export const Sidenav = () => {
	return (
        <div class="content">
		<div class="navigation">
            <div class="navigation__container">
                <ul class="navigation__list">
                    <li class="navigation__item">Wybrane</li>
                    <li class="navigation__item">Polecane</li>
                    <li class="navigation__item">Strona Główna</li>
                    <li class="navigation__item">Kontakt</li>
                    <li class="navigation__item">Więcej</li>
                </ul>
            </div>
			<Footer />
		</div>
        </div>
        
	);
};
