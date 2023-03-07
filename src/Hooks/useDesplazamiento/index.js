import React from 'react';

let posicion = 0;
function useDesplazamiento(){
    /*Mostrar la posicion del cursor dentro del div */
    const[ubicacion, setUbicacion] = React.useState("");
    const onScroll = (event) => {
        let nuevaUbicacion = ubicacion;
        nuevaUbicacion = event.target.scrollTop;
        posicion = nuevaUbicacion;
        setUbicacion(posicion);
    }
    return [onScroll, posicion];
}

export {useDesplazamiento};