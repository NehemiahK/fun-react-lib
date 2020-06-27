import React from 'react'
import * as library from "./../"

const ComponentList = (props) => {
    return (
        <section className='docs-nav'>
            <div className="docs-nav-header">
                <span>Components</span>
                <input type="search" placeholder="Search Component" />
            </div>
            <div className="docs-nav-list">
                {Object.keys(library).map(lib => <span key={lib} onClick={() => { props.setDemo(lib) }}>{lib}</span>)}
            </div>
        </section>
    )
}

export default ComponentList