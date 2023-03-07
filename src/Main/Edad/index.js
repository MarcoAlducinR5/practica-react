import React from 'react';

function Edad({edad, sumaEdad, restaEdad}){
    return (
        <React.Fragment>
            <p>Aumentando/Restando la edad</p>
            <p>Edad { edad }</p>
            <button onClick={ sumaEdad }>Age++</button>
            <button onClick={ restaEdad }>Age--</button>
            <hr />
            <hr />
        </React.Fragment>
    );
}

export {Edad};