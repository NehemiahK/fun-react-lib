import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';


const API_BASE_URL = 'https://randomuser.me/api';

const getUsers = async (currentPage, results) => {
	const res = await fetch(`${API_BASE_URL}/?page=${currentPage}&results=${results}`);
	const data = await res.json();
	return data.results;
};

const useFetchUsers = initialState => {
	const [data, setData] = useState(initialState.data);
	const [page, setPage] = useState(initialState.page);
	const [hasMore, setHasMore] = useState(initialState.page);
	const [isLoading, setIsLoading] = useState(initialState.isLoading);
	const [isError, setIsError] = useState(initialState.isError);

	useEffect(() => {
		let cancel = false;

		setIsLoading(true);
		setIsError(false);

		getUsers(page, 10)
			.then(res => {
				if (!cancel) {
					setData(data => data.concat(res));
					setIsLoading(false);
					setIsError(false);
					setHasMore(true);
				}
			})
			.catch(() => {
				setIsError(true);
				setIsLoading(false);
			});

		return () => {
			cancel = true;
		};
	}, [page]);

	return {
		data,
		setPage,
		hasMore,
		isLoading,
		isError,
	};
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
