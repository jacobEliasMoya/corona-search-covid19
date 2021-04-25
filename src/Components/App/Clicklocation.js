import React, { Component } from 'react'

export class Clicklocation extends Component {
    render() {
        return (
            <button onClick={this.props.onClick} className='clicklocation'>
                Click to get current Locations COVID-STATS
            </button>
        )
    }
}
