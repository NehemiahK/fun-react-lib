import React from 'react'
import './componentlist.css'
import Spinner from '../spinner/Spinner';

/*Add your component name to the array */
const components = ['Simple Button', 'Heading','Spinner']

const ComponentList = (props) => {
    return (<div className='component-list'>
        <h2>Components</h2>
        {components.map(c => <button key={c} onClick={() => { props.setDemo(c) }}>{c}</button>)}
    </div>)
}

export default ComponentList