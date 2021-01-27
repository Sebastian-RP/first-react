import { render } from '@testing-library/react';
import React from 'react'
// using lifecycle and handle events
class HandsomestEvent extends React.Component{
    render(){
        return(<a href="#" onClick={() => { console.log('there was clicked')}}>Click here and you find out the key of the hapiness</a>)
    }
    
}

export default HandsomestEvent;