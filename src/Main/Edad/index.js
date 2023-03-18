import React from 'react';
import { PracticaContext } from '../../Context';

function Edad(){
    
    const {edad, sumaEdad, restaEdad} = React.useContext(PracticaContext);

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