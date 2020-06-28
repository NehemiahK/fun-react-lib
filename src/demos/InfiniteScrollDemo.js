import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';


const InfiniteScrollDemo = () => {
	const [markdown, setMarkdown] = useState('');

	return (
		<React.Fragment>
			<ReactMarkdown source={markdown} />
			<div>
				<h2>My User List</h2>
			</div>
		</React.Fragment>
	);
};

export default InfiniteScrollDemo;
