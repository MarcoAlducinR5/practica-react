import React from 'react';

function Tecleo({name, changeName, tecleo}){
    return(
        <React.Fragment>
            <p>Detectar cada ves que se teclea obteniendo su valor</p>
            <input type="text" defaultValue={ name } onKeyUp={ changeName } />
            <p>Nombre { tecleo }</p>
            <hr />
            <hr />
        </React.Fragment>
    );
}

export {Tecleo};