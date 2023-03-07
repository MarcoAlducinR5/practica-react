import React from 'react';

function useTecleo(name){
    /*mostrar el valor cada que se escribe */
    const [tecleo, setTecleo] = React.useState(name);
    const changeName = (event) => {
        let escritura = tecleo;
        escritura = event.target.value;
        name = escritura;
        setTecleo(name);
    }
    return [changeName, tecleo];
}

export {useTecleo};