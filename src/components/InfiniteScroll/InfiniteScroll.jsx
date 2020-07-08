import React, { useRef, useEffect } from 'react';

import PropTypes from 'prop-types';

const InfiniteScroll = ({
  children,
  hasMore, // Required: Specifies if there are more entities to load
  isLoading, // Required: Specifies if the current state of the app is loading. If true and a loadingComponent was passed, it will be shown
  isError, // Required: Specifies if an error ocurred. If true and an errorComponent was passed, it will be shown
  triggerFunction, // Required: When the last element is visible, it will trigger the passed function.
  loadingComponent,
  errorComponent,
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

    // eslint-disable-next-line consistent-return
    return () => observer.disconnect();
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

InfiniteScroll.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  hasMore: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  triggerFunction: PropTypes.func.isRequired,
  loadingComponent: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  errorComponent: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

InfiniteScroll.defaultProps = {
  children: '',
  loadingComponent: null,
  errorComponent: null,
};

export default InfiniteScroll;
