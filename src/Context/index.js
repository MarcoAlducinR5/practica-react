import React from 'react';
import { useBoton } from '../Hooks/useBoton';
import { useDatosElementos } from '../Hooks/useDatosElementos';
import { useEdad } from '../Hooks/useEdad';
import { useDesplazamiento } from '../Hooks/useDesplazamiento';
import { useTecleo } from '../Hooks/useTecleo';
import { useMouse } from '../Hooks/useMouse';
import { useFocus } from '../Hooks/useFocus';
import { useInputVacio } from '../Hooks/useInputVacio';
import { useMaxMin } from '../Hooks/useMaxMin';
import { useTexto } from '../Hooks/useTexto';
import { useArreglo } from '../Hooks/useArreglo';

const PracticaContext = React.createContext();

function PracticaProvider(props) {

    let btnDisabled = true;
    let name = "Marco";
    let age = 18;
    let img = "https://www.dzoom.org.es/wp-content/uploads/2012/03/bosque-17-810x540.jpg";
    let texto1 = "Pasa el mouse aqui";
    let mensaje = "Selecciona la caja";
    let valido = "false";
    let mmQue = "true";
    let estadoNicolas = false;
    let estadoJulian = false;
    let arregloNombre = ['Nico', 'Juli', 'Santi'];
    
    const [estado, toggleButton] = useBoton(btnDisabled);
    const [marco] = useDatosElementos(name, age, img);
    const [edad, sumaEdad, restaEdad] = useEdad(marco.age);
    const [onScroll, posicion] = useDesplazamiento();
    const [changeName, tecleo] = useTecleo(marco.name);
    const [dblClic, pasaElMouse, alejaElMouse] = useMouse();
    const [texto, enfoque, desenfoque] = useFocus(mensaje);
    const [vacio, estaVacio] = useInputVacio(valido);
    const [nuevoValor, obtenerValor, sobrepaso, mayorMenor] = useMaxMin(mmQue);
    const [nombre, dato] = useTexto(estadoNicolas, estadoJulian);
    const [addName, desgloseArregloNombre, deleteName] = useArreglo(arregloNombre);

    return (
        <PracticaContext.Provider value={{
            estado, toggleButton, marco, edad, sumaEdad, restaEdad,
            onScroll, posicion, changeName, tecleo, texto1,
            dblClic, pasaElMouse, alejaElMouse, texto, enfoque,
            desenfoque, vacio, estaVacio, nuevoValor, obtenerValor,
            sobrepaso, mayorMenor, nombre, dato, addName,
            desgloseArregloNombre, deleteName
        }}>
            {props.children}
        </PracticaContext.Provider>
    );
}

export {PracticaContext, PracticaProvider};