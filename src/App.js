import React from 'react';
import './App.css';

let name = "Marco";
let age = 18;
let img = "https://www.dzoom.org.es/wp-content/uploads/2012/03/bosque-17-810x540.jpg";
const username = 'sokramr5';

/*Funcion que retorna datos */
const sum = (a, b) => {
  return a + b;
}
sum(1,3);

let btnDisabled = true;
let posicion = 0;

/*Funcion que retorna un alert al hacer doble click */
const dblClic = () => {
  alert("doble click");
}

let texto1 = "Pasa el mouse aqui";
/*Funcion cuando pasa el mouse sobre el elemento */
const pasaElMouse = (event) => {
  const element = event.target;
  element.innerText = "¡Bien, pasaste el mouse! ¿Viste que cambio?";
  element.style.background = "green";
  element.style.color = "RGB(0,0,0)";
}
/*Funcion cuando aleja el mouse del elemento */
const alejaElMouse = (event) => {
  const element = event.target;
  element.innerText = "¡Ups, volvio a cambiar! XD Pasalo otra vez";
  element.style.background = "RGB(0,12,34)";
  element.style.color = "white";
}

let mensaje = "Selecciona la caja";
let valido = "true";
let mmQue = "true";
let estadoNicolas = false;
let estadoJulian = false;

let arregloNombre = ['Nico', 'Juli', 'Santi'];

function App() {
  
  /*Uso de un estado para aumentar y disminuir un valor */
  const [edad, setEdad] = React.useState(age);
  const sumaEdad = () => {
    let nuevaEdad = edad;
    age = nuevaEdad += 1;
    setEdad(age);
    console.log(arregloNombre.length);
  }
  const restaEdad = () => {
    let nuevaEdad = edad;
    age = nuevaEdad -= 1;
    setEdad(age);
  }

  /*Uso de un estado para habilitar y deshabilitar un boton */
  const [estado, setEstado] = React.useState(btnDisabled);
  const toggleButton = () =>{
    let nuevoEstado = estado;
    btnDisabled = nuevoEstado = !nuevoEstado;
    setEstado(btnDisabled);
  }

  /*Mostrar la posicion del cursor dentro del div */
  const[ubicacion, setUbicacion] = React.useState("");
  const onScroll = (event) => {
    let nuevaUbicacion = ubicacion;
    nuevaUbicacion = event.target.scrollTop;
    posicion = nuevaUbicacion;
    setUbicacion(posicion);
  }

  /*mostrar el valor cada que se escribe */
  const [tecleo, setTecleo] = React.useState("");
  const changeName = (event) => {
    let escritura = tecleo;
    escritura = event.target.value;
    name = escritura;
    setTecleo(name);
  }
  
  /*mostrar un mensaje cada que se enfoque/desenfoque un input */
  const [texto, setEnfoque] = React.useState(mensaje);
  const enfoque = (event) => {
    let newMensaje = texto;
    newMensaje = "¡Bien, esta enfocado! ¿Viste que cambio?";
    mensaje = newMensaje;
    setEnfoque(mensaje);
  }
  const desenfoque = (event) => {
    let newMensaje = texto;
    newMensaje = "¡Chin, ya no tiene enfoque! =( Haz clic de nuevo";
    mensaje = newMensaje;
    setEnfoque(mensaje);
  }

  /*Verificar si un input esta vacio o no*/
  const[vacio, setVacio] = React.useState(valido);
  const estaVacio = (event) => {
    let tecla = event.target.value;
    let estado = vacio;
    if(tecla === ""){
      estado = "false";
      valido = estado;
    }
    else{
      estado = "true";
      valido = estado;
    }
    setVacio(valido);
  }

  /*Verificar el valor de un input sobrepasa el maximo y minimo permitido*/
  const[sobrepaso, setSobrepaso] = React.useState(mmQue);
  const mayorMenor = (event) => {
    let estado = sobrepaso;
    let max = event.target.max;
    let min = event.target.min;
    let dato = event.target.value;
    if(dato >= min && dato <= max){
      estado = "true";
      mmQue = estado;
    } else {
      estado = "false";
      mmQue = estado;
    }
    setSobrepaso(mmQue);
  }

  /*condicional en un input y mostrar un texto tras excribir un texto en especifico*/
  const[dato, setDato] = React.useState({nicolas : estadoNicolas, julian: estadoJulian});
  const nombre = (event) => {
    if(event.target.value === "nicolas"){
      dato.nicolas = !dato.nicolas;
    } else if(event.target.value === "julian"){
      dato.julian = !dato.julian;
    } 
    estadoNicolas = dato.nicolas;
    estadoJulian = dato.julian;
    setDato({estadoNicolas, estadoJulian});
  }

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
          {i}: {arr[i]} <button onClick={() => deleteName(i)}>Delete</button>
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

  const addName = (dato) => {}

  return (
    <React.Fragment>
      <header>
        <nav>
          <ul>
            <li>Opcion 1</li>
            <li>Opcion 2</li>
            <li>Opcion 3</li>npm 
          </ul>
        </nav>
      </header>
      <main>
        <p>Enviando dato de una variable</p>
        <h1>{ username }</h1>

        <p>Retornando un valor de una funcion</p>
        <p>{ sum(1,3) }</p>

        <p>Habilitando o deshabilitando un boton con un Hook</p>
        <button disabled={ btnDisabled }>Enviar</button>
        <button onClick={ toggleButton }>Toggle Button</button>

        <p>Enviando datos a elementos de HTML</p>
        <input type="text" defaultValue={ name } />
        <progress max="100" value={ age }></progress>
        <img width="100" src={ img } alt="" />

        <p>Aumentando/Restando la edad</p>
        <p>Edad { age }</p>
        <button onClick={ sumaEdad }>Age++</button>
        <button onClick={ restaEdad }>Age--</button>

        <p>Leer en que posicion se encuentra un div con barra de desplazamiento</p>
        <div className="box" onScroll={ onScroll }>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti earum beatae labore porro ratione. Velit maxime autem, modi dolor consequuntur perspiciatis nemo deserunt. Eos omnis veritatis, cumque hic ad quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, quis a veniam earum nam commodi excepturi quia reprehenderit ullam atque? Magni dolore quod corporis officiis, suscipit sunt placeat quas non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ab atque unde vero blanditiis consequatur dolores! Aliquid illum suscipit voluptatem ducimus sapiente, quia laboriosam inventore recusandae reiciendis asperiores nihil? Quaerat.</p>
        </div>
        <p>{ posicion }</p>

        <p>Detectar cada ves que se teclea obteniendo su valor</p>
        <input type="text" defaultValue={ name } onKeyUp={ changeName } />
        <p>Nombre { name }</p>

        <p>Mensaje de alerta cuando hace doble click</p>
        <div onDoubleClick={dblClic}>Haz Doble Click</div>

        <p>Mensaje que cambia cuando pasa o se va el mouse</p>
        <div onMouseOver={ pasaElMouse } onMouseOut={ alejaElMouse }>{ texto1 }</div>

        <p>Detecta si la caja de texto esta seleccionada o no </p>
        <input type="text" placeholder='Texto' className='focus' defaultValue={name} onFocus={enfoque} onBlur={desenfoque} />
        <div >{ mensaje }</div>

        <p>Verificar si un input esta vacio o no</p>
        <p>Nombre { name }</p>
        <input type="text" placeholder='Texto' defaultValue={ name } required onKeyUp={estaVacio} />
        <p>Valid: { valido }</p>

        <p>Verificar si un input esta fuera del rango o no</p>
        <p>Age: { age }</p>
        <input type="number" max="18" min="10" required  defaultValue={ age } onChange={mayorMenor} />
        <p>Valid: { mmQue }</p>

        <p>Verificar si un input esta fuera del rango o no</p>
        <input type="text" required onChange={nombre} defaultValue={ name } />
        <p className={`oculto ${estadoNicolas && 'visible'}`}>Soy Nicolas</p>
        <p className={`oculto ${(estadoJulian && age === 18) && 'visible'}`}>Soy Julian</p>
        
        <p>Ejemplo de un arreglo, eliminando y/o ingresando datos al mismo</p>
        <input type="text" />
        <button onClick={addName}>Add name</button>
        <ul>
          {desgloseArregloNombre}
        </ul>
        <hr/>
      </main>
      <footer>
        Creado por mí para tí
      </footer>
    </React.Fragment>
  );
}

export default App;
