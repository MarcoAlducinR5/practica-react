import React from "react";

function useBoton(btnDisabled){
    /*Uso de un estado para habilitar y deshabilitar un boton */
    const [estado, setEstado] = React.useState(btnDisabled);
    const toggleButton = () =>{
        btnDisabled = !estado;
        setEstado(btnDisabled);
    }
    return [estado, toggleButton];
}

export {useBoton};