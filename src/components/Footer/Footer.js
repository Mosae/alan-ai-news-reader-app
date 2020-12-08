import React from 'react';
import github from './GitHub-Mark-32px.png';
import './footer.css';
const Footer = () => {
	return (
		<div className="footer__container">
			<h2>Chat Bot By: Mosae Litsoane</h2>
			<a
				href="https://github.com/Mosae/alan-ai-news-reader-app"
				target="_blank">
				<img src={github} alt="github logo" />
			</a>
		</div>
	);
};

export default Footer;
