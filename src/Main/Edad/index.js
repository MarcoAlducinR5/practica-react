import React from 'react';

function Edad({edad, sumaEdad, restaEdad}){
    return (
        <div className='edad'>
            <p className='letreto'>Aumentando / Restando la edad</p>
            <p>Edad <span className='dato'>{ edad }</span></p>
            <button className='sumaEdad' onClick={ sumaEdad }>Age++</button>
            <button className='restaEdad' onClick={ restaEdad }>Age--</button>
        </div>
    );
}

export {Edad};