import React from 'react';

function useEdad(age){
    /*Uso de un estado para aumentar y disminuir un valor */
    const [edad, setEdad] = React.useState(age);
    const sumaEdad = () => {
        age = edad;
        age += 1;
        setEdad(age);
    }
    const restaEdad = () => {
        age = edad;
        age -= 1;
        setEdad(age);
    }
    return [edad, sumaEdad, restaEdad];
}

export {useEdad};