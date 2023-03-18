import React from 'react';
import { Titulo } from './Titulo';
import { Suma } from './Suma';
import { Boton } from './Boton';
import { DatosElementos } from './DatosElementos';
import { Edad } from './Edad';
import { Desplazamiento } from './Desplazamiento';
import { Tecleo } from './Tecleo';
import { Mouse } from './Mouse';
import { Inputs } from './Inputs';
import { Arreglo } from './Arreglo';
import './Main.css';

function Main(){
    return(
        <main className="principal">
            <Titulo />
            <hr />
            <hr />
            <Suma />
            <hr />
            <hr />
            <Boton />
            <hr />
            <hr />
            <DatosElementos />
            <hr />
            <hr />
            <Edad />
            <hr />
            <hr />
            <Desplazamiento />
            <hr />
            <hr />
            <Tecleo  />
            <hr />
            <hr />
            <Mouse />
            <hr />
            <hr />
            <Inputs />
            <hr />
            <hr />
            <Arreglo />
            <hr/>
            <hr/>
        </main>
    );
}

export { Main };