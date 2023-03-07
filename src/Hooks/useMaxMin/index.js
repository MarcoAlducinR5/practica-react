import React from 'react';

function useMaxMin(mmQue){

    const [nuevoValor, setNuevoValor] = React.useState("");
    const obtenerValor = (event) => {
        let escritura = event.target.value;
        setNuevoValor(escritura);
        console.log(escritura);
    }

    /*Verificar el valor de un input sobrepasa el maximo y minimo permitido*/
    const[sobrepaso, setSobrepaso] = React.useState(mmQue);
    const mayorMenor = (event) => {
        let estado = sobrepaso;
        let max = event.target.max;
        let min = event.target.min;
        let valor = event.target.value;
        if(valor < min || valor > max){
            estado = "false";
            mmQue = estado;
        }
        else{
            estado = "true";
            mmQue = estado;
        }
        setSobrepaso(mmQue);
    }

    return [nuevoValor, obtenerValor, sobrepaso, mayorMenor];
}

export {useMaxMin};