import React, { Component } from 'react'
import {Learnmore} from './Learnmore';
export class Clicklocation extends Component {
    render() {
        return (
            <button onClick={this.props.onClick} className='clicklocation'>
                Click for my countries COVID-STAT
            </button>
        )
    }
}
