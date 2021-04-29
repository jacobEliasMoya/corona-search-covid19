import React, { Component } from 'react'

export class Databutton extends Component {


    render() {
        return (
            <button onClick={this.props.onClick}>
                {this.props.inner}
            </button>
        )
    }
}
