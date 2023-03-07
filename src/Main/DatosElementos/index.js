import React from "react";

function DatosElementos({marco, edad}){
    return (
        <div className="elementos">
            <p>Enviando datos a elementos de HTML</p>
            <input type="text" defaultValue={ marco.name } className="input" />
            <p></p>
            <progress max="100" value={ edad } className="progreso" ></progress>
            <p></p>
            <img width={ edad } src={ marco.avatar } alt="" className="avatar" />
        </div>
    );
}

export {DatosElementos};