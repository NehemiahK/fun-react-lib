import React from 'react'
import './demodisplay.css'
/*add your demo in the import statement below */
import { SimpleButtonDemo, HeadingDemo , SpinnerDemo } from '../exports/exports'

const switchTo = (componentName) => {
    switch (componentName) {
        case 'Simple Button':
            return <SimpleButtonDemo />
        case 'Heading':
            return <HeadingDemo />
        case 'Spinner':
            return <SpinnerDemo/>
        default:
            return ''
    }
}

const DemoDisplay = (props) => {
    return (<div className='demo-display'>
        {switchTo(props.demo)}
    </div>)
}

export default DemoDisplay