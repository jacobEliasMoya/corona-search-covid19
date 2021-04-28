import React, { Component } from 'react';
import '../styles/head.css';
import {Logo} from './Logo';
import {Hamburgermenu} from './Hamburgermenu';

export class Header extends Component {
    render() {
        return (
            <header className='mainHeader'>
                <Logo />
                <Hamburgermenu />
            </header>
        )
    }
}