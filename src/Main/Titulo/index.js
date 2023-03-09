import React from 'react';

const username = 'SokramR5';

function Titulo(){
    return (
        <div className='Titulo'>
            <p>Enviando dato de una variable</p>
            <h1>Mi username es =&gt; { username }</h1>
        </div>
    );
}

export { Titulo };