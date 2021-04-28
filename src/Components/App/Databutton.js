import React, { Component } from 'react'

export class Databutton extends Component {

    render() {
        return (
            <button onClick={this.props.onClick} className='buttonvalue'>
                <i className={this.props.cnam}></i>
                {this.props.value}
            </button>
        )
    }
}
