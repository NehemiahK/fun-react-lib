import React,{Component} from 'react'
import flywheel from './images/flywheel.gif'
import pinwheel from './images/pinwheel.gif'
import glowring from './images/glowring.gif'
import turnsign from './images/turnsign.gif'



const switchSpinner=(type,children)=>{
    switch (type){
        case 'flywheel':
        return <div><img src={flywheel} alt="Fly wheel" /></div>

        case 'pinwheel':
        return <img src={pinwheel} alt="Pin Wheel" />

        case 'glowring':
        return <img src={glowring} alt="Glow Ring" />

        case 'turnsign':
        return <img src={turnsign} alt="Turn Sign" />
    }
}
    

const Spinner=(props)=>{
    return (<>{switchSpinner(props.type,props.children)}</>)
}

Spinner.defaultProps={
    type:'flywheel'
}

export default Spinner