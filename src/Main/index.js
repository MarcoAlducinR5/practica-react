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

function Main({
    estado, toggleButton, marco, edad, sumaEdad, restaEdad, 
    onScroll, posicion, name, changeName, tecleo,
    texto1, dblClic, pasaElMouse, alejaElMouse, texto, enfoque, 
    desenfoque, vacio, estaVacio, nuevoValor, obtenerValor, 
    sobrepaso, mayorMenor, nombre, dato, addName, desgloseArregloNombre
}){
    return(
        <main className="principal">
            <Titulo />
            <hr />
            <hr />
            <Suma />
            <hr />
            <hr />
            <Boton 
                estado = {estado} toggleButton = {toggleButton}
            />
            <hr />
            <hr />
            <DatosElementos 
                marco = {marco} edad = { edad }
            />
            <hr />
            <hr />
            <Edad
                edad = { edad } sumaEdad = { sumaEdad }
                restaEdad = { restaEdad }
            />
            <hr />
            <hr />
            <Desplazamiento 
                onScroll = { onScroll } posicion = { posicion }
            />
            <hr />
            <hr />
            <Tecleo 
                name= {name} changeName = {changeName}
                tecleo = {tecleo}
            />
            <hr />
            <hr />
            <Mouse 
                texto1 = {texto1} dblClic = {dblClic}
                pasaElMouse = {pasaElMouse} alejaElMouse = {alejaElMouse}
            />
            <hr />
            <hr />
            <Inputs 
                texto={texto} enfoque={enfoque} desenfoque={desenfoque}
                name= {name} vacio={vacio} estaVacio={estaVacio}
                edad={ edad } nuevoValor={nuevoValor} 
                obtenerValor={obtenerValor} sobrepaso={sobrepaso}
                mayorMenor={mayorMenor} nombre={nombre} dato={dato}
            />
            <hr />
            <hr />
            <Arreglo 
                addName={addName} 
                desgloseArregloNombre={desgloseArregloNombre} 
            />
            <hr/>
            <hr/>
        </main>
    );
}

export { Main };