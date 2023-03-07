import React from 'react';

function Inputs({name, enfoque, desenfoque, texto, vacio, estaVacio, 
    nuevoValor, obtenerValor, sobrepaso, mayorMenor, edad, nombre, dato}){
    return (
        <React.Fragment>
            <p>Detecta si la caja de texto esta seleccionada o no </p>
            <input type="text" placeholder='Texto' className='focus' defaultValue={name} onFocus={enfoque} onBlur={desenfoque} />
            <div >{ texto }</div>
            <hr />
            <p>Verificar si un input esta vacio o no</p>
            <p>Nombre { name }</p>
            <input type="text" placeholder='Texto' defaultValue={ name } required onKeyUp={estaVacio} />
            <p>Vacio: { vacio }</p>
            <hr />
            <p>Verificar si un input esta fuera del rango o no</p>
            <p>Dato: { nuevoValor }</p>
            <input type="number" max="18" min="10" required  defaultValue={ edad } onInput={obtenerValor} onChange={mayorMenor} />
            <p>Validacion: { sobrepaso }</p>
            <hr />
            <p>Evaluar si es nicolas o julian</p>
            <input type="text" required onChange={nombre} defaultValue={ name } />
            <p className={`oculto ${dato.estadoNicolas && 'visible'}`}>Soy Nicolas</p>
            <p className={`oculto ${(dato.estadoJulian && edad === 18) && 'visible'}`}>Soy Julian</p>
            <hr />
            <hr />
        </React.Fragment>
    );
}

export {Inputs};