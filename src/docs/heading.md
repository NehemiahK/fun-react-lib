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
`title`|string|yes|Title| The title that you want to put.
`body`|string|yes|Body| Body of the card

