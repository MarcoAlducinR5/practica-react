import React from 'react';

function Mouse({dblClic, pasaElMouse, alejaElMouse, texto1}){
    return (
        <React.Fragment>
            <p>Mensaje que cambia cuando pasa o se va el mouse</p>
            <div onMouseOver={ pasaElMouse } onMouseOut={ alejaElMouse }>{ texto1 }</div>

            <p>Mensaje de alerta cuando hace doble click</p>
            <div onDoubleClick={dblClic}>Haz Doble Click</div>

            <hr />
            <hr />
        </React.Fragment>
    );
}

export {Mouse};