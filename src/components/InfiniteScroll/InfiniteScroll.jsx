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

  useEffect(() => {
    if (isLoading || isError) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          triggerFunction();
        }
      },
      {
        rootMargin: '10% 0px 10% 0px',
      }
    );

    observer.observe(observerNode.current);

    return () => {
      observer.disconnect();
    };
  }, [isLoading, isError, hasMore, triggerFunction, observerNode]);

  return (
    <div>
      {children}
      <div id="infinite-scrolling-observer" ref={observerNode} />
      {isLoading && loadingComponent}
      {isError && errorComponent}
    </div>
  );
};

export default InfiniteScroll;
