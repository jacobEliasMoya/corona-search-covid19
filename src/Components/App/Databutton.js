import React, { Component } from 'react'

export class Databutton extends Component {


    render() {
        return (
            <button>
                {this.props.inner}
            </button>
        )
    }
}
