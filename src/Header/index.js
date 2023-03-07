import React from 'react';
import './Header.css';

function Header(){
    return (
        <header className='cabecera'>
            <nav>
                <ul className='menu'>
                    <li>Opcion 1</li>
                    <li>Opcion 2</li>
                    <li>Opcion 3</li>
                </ul>
            </nav>
        </header>
    );
}

export { Header };