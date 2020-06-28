import React, { useRef, useEffect } from 'react';

const InfiniteScroll = ({
	children,
	hasMore, // Required: Specifies if there are more entities to load
	isLoading, // Required: Specifies if the current state of the app is loading. If true and a loadingComponent was passed, it will be shown
	isError, // Required: Specifies if an error ocurred. If true and an errorComponent was passed, it will be shown
	triggerFunction, // Required: When the last element is visible, it will trigger the passed function.
	loadingComponent = null,
	errorComponent = null,
}) => {
	const observerNode = useRef();
	return (
		<div>
			{children}
			<div id="infinite-scrolling-observer" ref={observerNode}></div>
		</div>
	);
};

export default InfiniteScroll;
