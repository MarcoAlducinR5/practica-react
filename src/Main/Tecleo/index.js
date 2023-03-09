import React from 'react';

function Tecleo({name, changeName, tecleo}){
    return(
        <div className='Tecleo'>
            <p>Detectar cada ves que se teclea obteniendo su valor</p>
            <input className='cambioTexto' type="text" defaultValue={ name } onKeyUp={ changeName } />
            <p>Nombre <span className='escritura'>{ tecleo }</span></p>
        </div>
    );
}

export {Tecleo};