## Usage 

```
import React from 'react'
import Heading from '../components/Heading'

function App() {
  return (
    <div className="App">
       <Heading type='h3'> I'm an h3 header </Heading>
    </div>
  );
}

export default App;
```

### Properties

Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
`children`|children|no|empty| Text/children of heading
`type`|string|no|h2| h1,h2,h3,h4,h5,h6

