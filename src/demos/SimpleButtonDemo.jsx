import React, { useState, useEffect } from 'react'
import SimpleButton from '../components/SimpleButton/SimpleButton'
import ReactMarkdown from 'react-markdown'
import simpleButtonPath from '../docs/simple-button.md'


const SimpleButtonDemo = () => {
    const [markdown, setMarkdown] = useState('')

    useEffect(() => {
        fetch(simpleButtonPath).then((response) => response.text()).then((text) => {
            setMarkdown(text)
        })
    })

    const handleClick = () => {
        alert('Button Clicked')
    }

    return (<>
        <ReactMarkdown source={markdown} />
        <div style={{ margin: 10 }} />
        <SimpleButton color='blue' onClick={handleClick}> Click Me </SimpleButton>
    </>
    )
}

export default SimpleButtonDemo