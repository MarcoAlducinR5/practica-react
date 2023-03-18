import React from 'react';
import { PracticaContext } from '../../Context';

function Desplazamiento(){

    const {onScroll, posicion} = React.useContext(PracticaContext);

    return (
        <div className="Desplazamiento">
            <p>Leer en que posicion se encuentra un div con barra de desplazamiento</p>
            <div className="box" onScroll={ onScroll }>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti earum beatae labore porro ratione. Velit maxime autem, modi dolor consequuntur perspiciatis nemo deserunt. Eos omnis veritatis, cumque hic ad quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, quis a veniam earum nam commodi excepturi quia reprehenderit ullam atque? Magni dolore quod corporis officiis, suscipit sunt placeat quas non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ab atque unde vero blanditiis consequatur dolores! Aliquid illum suscipit voluptatem ducimus sapiente, quia laboriosam inventore recusandae reiciendis asperiores nihil? Quaerat.</p>
                <p>Incididunt non id in consequat pariatur consectetur. Occaecat velit pariatur anim consequat occaecat proident deserunt id adipisicing aliquip. Occaecat fugiat cupidatat enim quis cillum aute occaecat laboris laborum laborum cillum. Exercitation deserunt occaecat exercitation sunt adipisicing pariatur duis consequat esse officia aliquip sint officia qui.</p>
                <p>Occaecat fugiat dolore officia nulla in reprehenderit minim esse quis adipisicing veniam exercitation sit.</p>
                <p>Consequat aliquip sint veniam consequat mollit commodo velit cillum sint. Cillum proident consectetur enim labore. Esse ipsum nulla Lorem cillum. Eu duis do occaecat non. Incididunt ad fugiat deserunt excepteur sint dolore est id enim laboris esse.</p>
                <p>Magna laboris deserunt magna esse est magna. Dolor sit qui nisi dolor minim exercitation ut et cillum proident. Duis in ex elit laboris nulla ex Lorem laboris eu incididunt culpa. Nulla aliqua incididunt anim magna cupidatat magna eiusmod sunt sint dolore. Pariatur anim aliqua laboris nostrud. Nisi Lorem culpa laboris anim occaecat exercitation.</p>
                <p>Veniam nulla consequat sit ad elit. In ipsum esse veniam occaecat commodo mollit exercitation ea sit enim eiusmod sunt reprehenderit. Eu irure ad nisi incididunt amet nulla amet officia. Duis culpa est velit id sit irure consectetur ex eu ipsum velit nostrud occaecat aliqua. Voluptate esse enim aliqua cupidatat commodo eu amet.</p>
            </div>
            <p>{ posicion }</p>
            <hr />
            <hr />
        </div>
    );
}

export {Desplazamiento};