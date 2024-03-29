import React from 'react';
import { PracticaContext } from '../../Context';

function Arreglo(){

    const {addName, desgloseArregloNombre} = React.useContext(PracticaContext);

    return(
        <div className="arreglo">
            <p>Ejemplo de un arreglo, eliminando y/o ingresando datos al mismo</p>
            <input type="text" className="inDato" />
            <button onClick={addName} className="btnAdd" >+</button>
            <ul>
                {desgloseArregloNombre}
            </ul>
        </div>
    );
}

export {Arreglo};