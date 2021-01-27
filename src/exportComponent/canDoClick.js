import React, { useState } from 'react'

// -- resumen 
// import React, { useState } from 'react' 
// const [count, setCount] = usestate(0); the cero is the inicial state
//  const ExampleToLearn = () => { setCount(count + 1 ) } 

const Example = () => {
    const [count, setHighTrouble] = useState(0);
    let styleBotton = 'odd';
    const windRose = () => {
        setHighTrouble(count + 1)
    }

    if(count%2===0){
        console.log(`el valor ${count} es par`);
        styleBotton='even';
        }  
        else{
        console.log(`el valor ${count} es impar`);
        styleBotton='odd';
    }

    console.log(`valor = ${count}`);
    return(
        <div>
            <p>you click {count} times</p>
            <button className={styleBotton} onClick={windRose
                // () => {setCount(count + 1)}
                }>click me</button>  
        </div>
    )
}

export default Example;