import React from 'react'

// props are the property acronym, that way you can create more dinamyc components
const saraNombre = 'sara';

function Welcome(saraNombre){
    // destructuring const {title, description, image, color } = this.props
    // before this.props.title another ex this.props.image / after use destructuring - title another ex image. use less text
    
    return(<h1>Hello, {saraNombre}</h1>)
}
const element2 = <Welcome nombre={saraNombre}></Welcome>

export default Welcome;