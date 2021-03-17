import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export const FooterSocial = () => {
	return (
		<div class='footer__social'>
			<button class='footer__social-media'>
				<FacebookIcon style={{ width: '4rem', height: '4rem' }} />
			</button>
			<button class='footer__social-media'>
				<InstagramIcon style={{ width: '4rem', height: '4rem' }} />
			</button>
		</div>
	);
};
