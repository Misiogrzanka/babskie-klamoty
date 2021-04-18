import React from 'react';

import { ItemImg } from '../Atoms/main-content';
import { ItemInfo } from '../Molecules/main-content';

import FavoriteIcon from '@material-ui/icons/Favorite';
import VisibilityIcon from '@material-ui/icons/Visibility';

export const ItemCard = () => {
	return (
		// {/* Map data into cards */}
		<div class='main__card'>
			<ItemImg />
			<ItemInfo />
			<div class='main__card-popup'>
				<button class='main__card-popup-1'>
					<FavoriteIcon style={{ width: '3rem', height: '3rem' }} />
				</button>
				<button class='main__card-popup-2'>
					<VisibilityIcon style={{ width: '3rem', height: '3rem' }} />
				</button>
			</div>
		</div>
	);
};
