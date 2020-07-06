## Usage 

```
import React, { useState, useEffect } from 'react';
import InfiniteScroll from "../InfiniteScroll" 

function App() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    myFetchFunction();
  }, []);

function myFetchFunction () {
  setIsLoading(true);
  setIsError(false);
  

  fetch('https://myapi.com/mylist')
    .then(res => res.json())
    .then(data => {
      setList(list.concat(data));
      setPage(page => page + 1);
      setIsLoading(false);
      setIsError(false);
    })
    .catch(() => {
      setIsError(true);
      setIsLoading(false);
    })
}

  return (
    <InfiniteScroll
      hasMore={hasMore}
      isLoading={isLoading}
      isError={isError}
      triggerFunction={myFetchFunction}
      loadingComponent={<p>loading...</p>}
      errorComponent={<p>An error ocurred...</p>}
    >
      {list.map(item => <div key={item.id}>{/* ... */}</div>)}
    </InfiniteScroll>
  );
}

export default App;
```

### Properties

Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
`children`|node (list)|no|empty| Your array of items.
`hasMore`|boolean|yes|empty| Specifies if there are more entities to load. If false, triggerFunction() will not be executed.
`isLoading`|boolean|yes|empty| Specifies if the current state of the app is loading. If true, triggerFunction() will not be executed.
`isError`|boolean|yes|empty| Specifies if an error ocurred. If true, triggerFunction() will not be executed.
`triggerFunction`|function|yes|empty| When the last item is visible, it will trigger the passed function.
`loadingComponent`|node|no|null| If isLoading is true, it will be shown below the last item.
`errorComponent`|node|no|null| If isError is true, it will be shown below the last item.

