import React from "react";

function useFocus(mensaje){
    /*mostrar un mensaje cada que se enfoque/desenfoque un input */
    const [texto, setEnfoque] = React.useState(mensaje);
    const enfoque = (event) => {
        let newMensaje = texto;
        newMensaje = "¡Bien, esta enfocado! ¿Viste que cambio?";
        mensaje = newMensaje;
        setEnfoque(mensaje);
    }
    const desenfoque = (event) => {
        let newMensaje = texto;
        newMensaje = "¡Chin, ya no tiene enfoque! =( Haz clic de nuevo";
        mensaje = newMensaje;
        setEnfoque(mensaje);
    }

    return [texto, enfoque, desenfoque];
}

export {useFocus};