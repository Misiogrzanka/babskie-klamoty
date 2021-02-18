import React from 'react';

import { ItemPrice, ItemName } from '../../Atoms/main-content';

export const ItemInfo = () => {
	return (
		<div class='main__card-info'>
			<ItemName />
			<ItemPrice />
		</div>
	);
};
