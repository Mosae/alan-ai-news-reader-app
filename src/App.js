import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles.js';
import Footer from './components/Footer/Footer';
const App = () => {
	const [newsArticles, setNewsArticles] = useState([]);
	const [activeArticle, setActiveArticle] = useState(-1);
	const classes = useStyles();
	//useEffect to render on component did mount
	const alanKey =
		'1d1eaf053ee87ab05f29ec21509c3ac02e956eca572e1d8b807a3e2338fdd0dc/stage';
	useEffect(() => {
		alanBtn({
			key: alanKey,
			onCommand: ({ command, articles }) => {
				if (command === 'newHeadlines') {
					setNewsArticles(articles);
					setActiveArticle(-1);
				} else if (command === 'highlight') {
					setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
				}
			},
		});
	}, []);
	return (
		<div>
			<div className={classes.logoContainer}>
				<img
					src="https://alan.app/voice/images/previews/preview.jpg"
					className={classes.alanLogo}
					alt="logo"
				/>
			</div>
			<NewsCards articles={newsArticles} activeArticle={activeArticle} />
			<Footer />
		</div>
	);
};

export default App;
