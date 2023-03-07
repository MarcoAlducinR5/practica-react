import React from 'react';

const username = 'SokramR5';

function Titulo(){
    return (
        <React.Fragment>
            <p>Enviando dato de una variable</p>
            <h1>Mi username es =&gt; { username }</h1>
            <hr />
            <hr />
        </React.Fragment>
    );
}

export { Titulo };