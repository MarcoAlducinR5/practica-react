import React from 'react';

function Mouse({dblClic, pasaElMouse, alejaElMouse, texto1}){
    return (
        <div className='Mouse'>
            <p>Mensaje que cambia cuando pasa o se va el mouse</p>
            <div className='accionMouse' onMouseOver={ pasaElMouse } onMouseOut={ alejaElMouse }>{ texto1 }</div>
            <hr />
            <p>Mensaje de alerta cuando hace doble click</p>
            <div className='accionClic' onDoubleClick={dblClic}>=&gt; Haz Doble Click</div>
        </div>
    );
}

export {Mouse};