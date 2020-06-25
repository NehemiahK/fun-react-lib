## Usage 

```
import React from 'react';
import {SimpleButton} from "../SimpleButton" 

function App() {

  const handleClick = () => {
      alert('Button Clicked')
  }

  return (
    <div className="App">
       <SimpleButton color='blue' onClick={handleClick}> Click Me </SimpleButton>
    </div>
  );
}

export default App;
```

### Properties

Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
`color`|string|no|red| Choose from red, blue, and black. 
`children`|children|no|Click here| Text you want the button to display
`size`|string|no|sm| sm, md, and lg font sizes.
`onClick`|function|no| () => {}| Function to call when button is clicked.
