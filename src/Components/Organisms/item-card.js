import React from 'react';

import { ItemImg } from '../Atoms/main-content';
import { ItemInfo } from '../Molecules/main-content';

export const ItemCard = () => {
	return (
		// {/* Map data into cards */}
		<div class='main__card'>
			<ItemImg />
			<ItemInfo />
		</div>
	);
};
