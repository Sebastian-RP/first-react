import React from 'react'

function BrokeLink() {
    function LinkNotWork(e) {
        e.preventDefault(); //with this we avoid the link redirect us
        console.log("link was clicked without succes");
    }
    return(
        <div>
            <h3>I don't know where I'm going but look great</h3>
            <p>Otra diferencia es que en React no puedes retornar false para prevenir el comportamiento por defecto. Debes, explícitamente, llamar preventDefault. Por ejemplo, en un HTML plano, para prevenir el comportamiento por defecto de un enlace de abrir una nueva página, puedes escribir</p>
            <a href="https://es.reactjs.org/docs/state-and-lifecycle.html" onClick={LinkNotWork}>click me and show you the way</a>
        </div>
    )
}

export default BrokeLink;