import React from "react";
import { PracticaContext } from "../../Context";

function Boton(){
    
    const {estado, toggleButton} = React.useContext(PracticaContext);
    
    return (
        <div className="boton">
            <p>Habilitando o deshabilitando un boton con un Hook</p>
            <button className="btnDeshabilitado" disabled={ estado }>Enviar</button>
            <button className="toggleButton" onClick={ toggleButton }>Toggle Button</button>
        </div>
    );
}

export {Boton};