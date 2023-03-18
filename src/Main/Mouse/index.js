import React from 'react';
import { PracticaContext } from '../../Context';

function Mouse(){
    
    const {dblClic, pasaElMouse, alejaElMouse, texto1} = React.useContext(PracticaContext);

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