## Usage 

```
import React from 'react'
import { Tabs } from '../components'

function App() {
  return (
    <div className="App">
      <Tabs defaultIndex={0} onTabClick={console.log}>
          <Tabs.Tab name="London">
              <h3>London</h3>
              <p>London is the capital city of England.</p>
          </Tabs.Tab>
          <Tabs.Tab name="Paris">
              <h3>Paris</h3>
              <p>Paris is the capital of France.</p>
          </Tabs.Tab>
          <Tabs.Tab name="Tokyo">
              <h3>Tokyo</h3>
              <p>Tokyo is the capital of Japan.</p>
          </Tabs.Tab>
      </Tabs>
    </div>
  );
}

export default App;
```

### Properties

#### <Tabs>

| Property | Type   | Required | Default value | Description |
|----------|--------|----------|---------------|------------|
| defaultIndex     | integer | -      | 0            | Key Index of the the tab to be selected.|
| onTabClick      | Function | no       | () => {}           |tab onselect callback function.|

#### <Tabs.Tab/>

| Property | Type   | Required | Default value | Description |
|----------|--------|----------|---------------|------------|
| name     | string | yes      | -            | Name of the tab.|


### Sample
