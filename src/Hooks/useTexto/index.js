import React from 'react';

function useTexto(estadoNicolas, estadoJulian){
    /*condicional en un input y mostrar un texto tras excribir un texto en especifico*/
    const[dato, setDato] = React.useState({nicolas : estadoNicolas, julian: estadoJulian});
    const nombre = (event) => {
        if(event.target.value === "nicolas"){
            dato.nicolas = !dato.nicolas;
        } else if(event.target.value === "julian"){
            dato.julian = !dato.julian;
        } 
        estadoNicolas = dato.nicolas;
        estadoJulian = dato.julian;
        setDato({estadoNicolas, estadoJulian});
    }
    return[nombre, dato];
}

export {useTexto};