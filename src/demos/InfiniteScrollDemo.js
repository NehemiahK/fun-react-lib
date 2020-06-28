import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll';
import infiniteScrollPath from '../docs/infinite-scroll.md';

const API_BASE_URL = 'https://randomuser.me/api';

const getUsers = async (currentPage, results) => {
	const res = await fetch(`${API_BASE_URL}/?page=${currentPage}&results=${results}`);
	const data = await res.json();
	return data.results;
};

const useFetchUsers = initialState => {
	const [data, setData] = useState(initialState.data);
	const [page, setPage] = useState(initialState.page);
	const [hasMore, setHasMore] = useState(initialState.hasMore);
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

	useEffect(() => {
		fetch(infiniteScrollPath)
			.then(res => res.text())
			.then(text => {
				setMarkdown(text);
			});
	});

	const { data, setPage, hasMore, isLoading, isError } = useFetchUsers({
		data: [],
		page: 1,
		hasMore: true,
		isLoading: false,
		isError: false,
	});

	return (
		<React.Fragment>
			<ReactMarkdown source={markdown} />
			<div>
				<h2>My User List</h2>
				<InfiniteScroll
					hasMore={hasMore}
					isLoading={isLoading}
					isError={isError}
					triggerFunction={() => {
						setPage(page => page + 1);
					}}
					loadingComponent={<p>loading...</p>}
					errorComponent={<p>An error ocurred...</p>}
				>
					{data.map((d, i) => {
						return (
							<div key={i}>
								<h3>{`${d.name.title}. ${d.name.first} ${d.name.last}`}</h3>
								<p>
									{d.cell} - {d.email}
								</p>
							</div>
						);
					})}
				</InfiniteScroll>
			</div>
		</React.Fragment>
	);
};

export default InfiniteScrollDemo;
