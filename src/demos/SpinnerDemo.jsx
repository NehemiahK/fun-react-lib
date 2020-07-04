import React, { useState, useEffect } from 'react'
import Spinner from '../components/spinner/Spinner'
import spinnerDocPath from '../docs/spinner.md'
import ReactMarkdown from 'react-markdown'

const SpinnerDemo=()=>{
const [markdown,setMarkdown]=useState('')

useEffect(()=>{
    fetch(spinnerDocPath).then((response)=> response.text()).then((text)=>{
        setMarkdown(text)
    })

})

    return (<>
    <div><ReactMarkdown source={markdown}/>
    <Spinner />
    <Spinner type="glowring"/>
    <Spinner type="pinwheel"/>
    <Spinner type="turnsign"/></div>
    </>)

}

export default SpinnerDemo