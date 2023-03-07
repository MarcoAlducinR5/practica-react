import React from 'react';

/*Funcion que retorna datos */
const sum = (a, b) => {
  return a + b;
}

function Suma(){
    return (
        <React.Fragment>
            <p>Retornando un valor de una funcion</p>
            <h4>sum(1,3) = { sum(1,3) }</h4>
            <hr />
            <hr />
        </React.Fragment>
    );
}

export { Suma };