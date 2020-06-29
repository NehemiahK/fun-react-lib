import React from 'react'
import './componentlist.css'

/*Add your component name to the array */
const components = ['Simple Button', 'Heading', 'Progress Bar']

const ComponentList = (props) => {
    return (<div className='component-list'>
        <h2>Components</h2>
        {components.map(c => <button key={c} onClick={() => { props.setDemo(c) }}>{c}</button>)}
    </div>)
}

export default ComponentList