## Usage 

```js
import React, { useState } from 'react';
import { RadioButton } from "../components/RadioButton"; 

function App() {

  const [selectedValue, setSelectedValue] = useState('A');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="App">
      <RadioButton
        name="radio-a"
        checked={selectedValue === 'A'}
        onChange={handleChange}
        value="A"
      >
        Select A
      </RadioButton>

      <RadioButton
        name="radio-b"
        checked={selectedValue === 'B'}
        onChange={handleChange}
        value="B"
      >
        Select B
      </RadioButton>
    </div>
  );
}

export default App;
```

### Properties

| Property   | Type     | Required | Default value | Description                                                  |
| :--------- | :------- | :------- | :------------ | :----------------------------------------------------------- |
| `name`     | string   | yes      | radio         | name for the radio button                                    |
| `checked`  | boolean  | no       | false         | Boolean flag that determine the state of the button          |
| `disabled` | boolean  | no       | false         | Boolean flag to disable radio button                         |
| `value`    | string   | yes      |               | The value to be used for the respective button when selected |
| `onChange` | function | yes      | () => {}      | Function to call when radio button is clicked.               |

### Sample