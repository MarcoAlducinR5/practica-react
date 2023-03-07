import React from 'react';
import { Header } from '../Header';
import { Main } from '../Main';
import { Footer } from '../Footer';
import './App.css';
import { useBoton } from '../Hooks/useBoton/index.js';
import { useDatosElementos } from '../Hooks/useDatosElementos/index.js';
import { useEdad } from '../Hooks/useEdad/index.js';
import { useDesplazamiento } from '../Hooks/useDesplazamiento/index.js';
import { useTecleo } from '../Hooks/useTecleo/index.js';
import { useMouse } from '../Hooks/useMouse';
import { useFocus } from '../Hooks/useFocus';
import { useInputVacio } from '../Hooks/useInputVacio';
import { useMaxMin } from '../Hooks/useMaxMin';
import { useTexto } from '../Hooks/useTexto';
import { useArreglo } from '../Hooks/useArreglo';

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

function App() {

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
    <React.Fragment>
      <Header />
      <Main 
        estado={estado} toggleButton={toggleButton} marco={marco} edad={edad} 
        sumaEdad={sumaEdad} restaEdad={restaEdad} onScroll={onScroll} 
        posicion={posicion} name={marco.name} changeName={changeName} 
        tecleo={tecleo} texto1={texto1} dblClic={dblClic} 
        pasaElMouse={pasaElMouse} alejaElMouse={alejaElMouse} texto={texto} 
        enfoque={enfoque} desenfoque={desenfoque} vacio={vacio} 
        estaVacio={estaVacio} nuevoValor={nuevoValor} obtenerValor={obtenerValor} 
        sobrepaso={sobrepaso} mayorMenor={mayorMenor} nombre={nombre} dato={dato} 
        addName={addName} desgloseArregloNombre={desgloseArregloNombre} deleteName={deleteName}
      />
      <Footer />
    </React.Fragment>
  );
}

export default App;
