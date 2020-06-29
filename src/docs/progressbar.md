
## Usage 

```
import React from 'react'
import ProgressBar from '../components/ProgressBar'

function App() {
    const testData = [
        { bgColor: "#6a1b9a", completed: 60 },
        { bgColor: "#00695c", completed: 30 },
        { bgColor: "#ef6c00", completed: 53 },
      ];

  return (
    <div className="App">
        {testData.map((item, idx) => (
        <ProgressBar key={idx} bgColor={item.bgColor} completed={item.completed}/>
      ))}
    </div>
  );
}

export default App;
```
### Properties

Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
`key`|number|yes|empty| Unique item key
`bgColor`|string|no|"#e0e0de"| Progress color
`completed`|number|no|50| Progress percent