import React from 'react';

function useInputVacio(valido){
    /*Verificar si un input esta vacio o no*/
    const[vacio, setVacio] = React.useState(valido);
    const estaVacio = (event) => {
        let tecla = event.target.value;
        let estado = vacio;
        if(tecla === ""){
            estado = "true";
            valido = estado;
        }
        else{
            estado = "false";
            valido = estado;
        }
        setVacio(valido);
    }

    return [vacio, estaVacio];
}

export {useInputVacio};