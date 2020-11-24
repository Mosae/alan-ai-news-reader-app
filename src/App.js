import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const App = () => {
	//useEffect to render on component did mount
	const alanKey =
		'1d1eaf053ee87ab05f29ec21509c3ac02e956eca572e1d8b807a3e2338fdd0dc/stage';
	useEffect(() => {
		alanBtn({
			key: alanKey,
			onCommand: ({ command, articles }) => {
				if (command === 'latestNews') {
					console.log(articles);
				}
			},
		});
	}, []);
	return (
		<div>
			<h1>Alan AI News Application</h1>
		</div>
	);
};

export default App;
