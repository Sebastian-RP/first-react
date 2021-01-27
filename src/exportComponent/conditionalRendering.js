import React from 'react'

// don't forget use "return" in the function cause they should deliver
function UserGreeting() {
    return(<h2>welcome back dude, here can be calm</h2>) 
}

function GuestGreeting() {
    return(<h2>please sign up</h2>)
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    console.log(props.isLoggedIn);
    if(isLoggedIn){
        return( <UserGreeting/>)
    }else{
        return( <GuestGreeting/>)
    } 
}

export default Greeting;
