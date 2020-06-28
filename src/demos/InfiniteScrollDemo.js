import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';


const API_BASE_URL = 'https://randomuser.me/api';

const getUsers = async (currentPage, results) => {
	const res = await fetch(`${API_BASE_URL}/?page=${currentPage}&results=${results}`);
	const data = await res.json();
	return data.results;
};

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
