## Usage 

```
import React from 'react'
import Card from '../components/Card'

function App() {
  return (
    <div className="App">
       <Card
       title="Title Goes here"
       body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores et a repellendus magnam, illum aut quod molestiae. Ipsam mollitia vero, iure repellat deleniti ea, qui repellendus praesentium iste pariatur fugit!" 
       />
    </div>
  );
}

export default App;
```

### Properties

Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
`title`|string|yes|Title| The title that you want to put.
`body`|string|yes|Body| Body of the card.

