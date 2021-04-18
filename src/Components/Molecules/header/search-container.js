import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';

export const SearchContainer = () => {
	return (
		<div class='header__brand-search'>
			<button class='header__brand-search-item'>
				<FacebookIcon style={{ width: '4rem', height: '4rem' }} />
			</button>
			<button class='header__brand-search-item'>
				<InstagramIcon style={{ width: '4rem', height: '4rem' }} />
			</button>
			<button class='header__brand-search-item'>
				<SearchIcon style={{ width: '4rem', height: '4rem' }} />
			</button>
			<button class='header__brand-search-item'>
				<FavoriteIcon style={{ width: '4rem', height: '4rem' }} />
			</button>
		</div>
	);
};
