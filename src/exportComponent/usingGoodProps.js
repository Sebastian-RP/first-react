import React from 'react'

function WelcomeTo(props) {
  return <h1>Hello, {props.name} you wear clothes {props.sizeN}</h1>;
}

const saraName = 'sara';
const cahalName = 'cahal';
const editeName = 'edite';
function AddMore() {
  return (
    <div>
      <WelcomeTo name={saraName} sizeN="m"/>
      <WelcomeTo name={cahalName} sizeN="l"/>      
      <WelcomeTo name={editeName} sizeN="s"/>      
    </div>
  );
}

export default AddMore;