import React from 'react';

function useArreglo(arregloNombre){

    /* Manipulacion de arreglos */
    let desgloseArregloNombre = [];

    const[arr, setArr] = React.useState(arregloNombre);
    if(arr.length === 0){
        desgloseArregloNombre = <li>No hay nombres</li>;
    } else {
        /*Formas de desglosar un arreglo asignandolo a una variable */
        /* desgloseArregloNombre = 
            arr.map( (nombre, i) => 
            <li key={i}>
                {i}: {nombre} <button onClick={() => deleteName(i)}>Delete</button>
            </li>
            )
        ; */
        for(let i = 0; i<arr.length; i++){
            desgloseArregloNombre.push(
                <li key={i}>
                    {i}: {arr[i]} <button className="btnDelete" onClick={() => deleteName(i)}>x</button>
                </li>
            );
        }
    }

    const deleteName = (dato) => {
        const busqueda = arr.findIndex(valor => valor === dato);
        const newArr = [...arr];
        newArr.splice(busqueda,1);
        setArr(newArr);
    }

    const addName = (dato) => {
        alert("Aca se va a agregar registros" + dato);
    }

    return [addName, desgloseArregloNombre, deleteName];
}

export {useArreglo};