function useMouse(){
    
    /*Funcion que retorna un alert al hacer doble click */
    const dblClic = () => {
        alert("doble click");
    }
    
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

    return [dblClic, pasaElMouse, alejaElMouse];
}

export {useMouse};