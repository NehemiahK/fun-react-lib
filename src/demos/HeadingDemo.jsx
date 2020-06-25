import React, { useState, useEffect } from 'react'
import Heading from '../components/Heading/Heading'
import ReactMarkdown from 'react-markdown'
import simpleButtonPath from '../docs/heading.md'

const HeadingDemo = () => {
    const [markdown, setMarkdown] = useState('')

    useEffect(() => {
        fetch(simpleButtonPath).then((response) => response.text()).then((text) => {
            setMarkdown(text)
        })
    })

    return (<>
        <ReactMarkdown source={markdown} />
        <Heading type='h3'> I'm an h3 header </Heading>
    </>
    )
}

export default HeadingDemo