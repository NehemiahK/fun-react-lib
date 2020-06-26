import React, { useState } from 'react'
import './App.css'
import ComponentList from './components/ComponentList/ComponentList'
import DemoDisplay from './demos/DemoDisplay'

function App() {
    const [demo, setDemo] = useState('')

    return (
        <div className="App">
            <ComponentList setDemo={setDemo} />
            <DemoDisplay demo={demo} />
        </div>
    )
}

export default App
