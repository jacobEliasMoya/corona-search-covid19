import React, { Component } from 'react'
import logo from '../images/germ.png';

// simple image to be outputted with interchangable image src
export class Logo extends Component {
    render() {
        return (<img src={logo} />)
    }
}
