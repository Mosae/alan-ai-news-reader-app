import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import logo from './images/alan-logo-horizontal-color.png';
import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles.js';
import wordsToNumbers from 'words-to-numbers';
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
			onCommand: ({ command, articles, number }) => {
				if (command === 'newHeadlines') {
					setNewsArticles(articles);
					setActiveArticle(-1);
				} else if (command === 'highlight') {
					setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
				} else if (command === 'open') {
					const parsedNumber =
						number.length > 2
							? wordsToNumbers(number, { fuzzy: true })
							: number;
					const article = articles[parsedNumber - 1];
					if (parsedNumber > 20) {
						alanBtn().playText('Please try that again');
					} else if (article) {
						window.open(article.url, '_blank');
						alanBtn().playText('Opening...');
					}
				}
			},
		});
	}, []);
	return (
		<div>
			<div className={classes.logoContainer}>
				<img src={logo} className={classes.alanLogo} alt="Alan logo" />
			</div>
			<NewsCards articles={newsArticles} activeArticle={activeArticle} />
			<Footer />
		</div>
	);
};

export default App;
