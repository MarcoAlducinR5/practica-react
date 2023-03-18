import React from 'react';
import { PracticaContext } from '../../Context';

function Tecleo(){
    
    const {marco, changeName, tecleo} = React.useContext(PracticaContext);

    return(
        <div className='Tecleo'>
            <p>Detectar cada ves que se teclea obteniendo su valor</p>
            <input className='cambioTexto' type="text" defaultValue={ marco.name } onKeyUp={ changeName } />
            <p>Nombre <span className='escritura'>{ tecleo }</span></p>
        </div>
    );
}

export {Tecleo};