import React from 'react';
import { PracticaContext } from '../../Context';

function Inputs(){

    const {marco, enfoque, desenfoque, texto, vacio, 
        estaVacio, nuevoValor, obtenerValor, sobrepaso, 
        mayorMenor, edad, nombre, dato} = 
        React.useContext(PracticaContext);

    return (
        <div className='Inputs'>
            <div className='seleccion'>
                <p>Detecta si la caja de texto esta seleccionada o no </p>
                <input type="text" placeholder='Texto' className='focus' defaultValue={marco.name} onFocus={enfoque} onBlur={desenfoque} />
                <p className='textoFocus'>{ texto }</p>
            </div>
            <hr />
            <div className='vacio'>
                <p>Verificar si un input esta vacio <strong>True</strong> o no <strong>False</strong></p>
                <input type="text" placeholder='Texto' defaultValue={ marco.name } required onKeyUp={estaVacio} />
                <p>Vacio: <span>{ vacio }</span></p>
            </div>
            <hr />
            <div className='rango'>
                <p>Verificar si un input esta fuera <strong>True</strong> del rango o no <strong>False</strong></p>
                <p>Dato: { nuevoValor }</p>
                <input type="number" max="18" min="10" required  defaultValue={ edad } onInput={obtenerValor} onChange={mayorMenor} />
                <p>Validacion: <span>{ sobrepaso }</span></p>
            </div>
            <hr />
            <div className='NicolasJulian'>
                <p>Evaluar si es nicolas o julian</p>
                <input type="text" required onChange={nombre} defaultValue={ marco.name } />
                <p className={`oculto ${dato.estadoNicolas && 'visible'}`}>Soy Nicolas</p>
                <p className={`oculto ${(dato.estadoJulian && edad === 18) && 'visible'}`}>Soy Julian</p>
            </div>
        </div>
    );
}

export {Inputs};